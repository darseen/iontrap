import { db } from "@/db";
import { userTable } from "@/db/schema";
import redisClient from "@/lib/redis";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { comparePassword, generateSalt, hashPassword } from "../hash-password";
import { createUserSession } from "../session";
import { eq } from "drizzle-orm";
import { Session } from "../../types";

export async function getSession() {
  const sessionId = (await cookies()).get("session-id");
  if (!sessionId) {
    return NextResponse.json({
      data: null,
      error: { message: "Not logged in" },
    });
  }

  const session = await redisClient.get(`session:${sessionId.value}`);
  if (!session) {
    return NextResponse.json({
      data: null,
      error: { message: "Not logged in" },
    });
  }

  return NextResponse.json({
    data: { session: JSON.parse(session) as Session },
    error: null,
  });
}

export async function signIn(request: Request) {
  const { email, password } = await request.json();

  if (!password)
    return NextResponse.json({
      data: null,
      error: { message: "Invalid Credentials" },
    });

  const [user] = await db
    .select()
    .from(userTable)
    .where(eq(userTable.email, email));

  if (!user) {
    return NextResponse.json({
      data: null,
      error: { message: "Invalid Credentials" },
    });
  }

  // compare password using scrypt
  const isPasswordCorrect = await comparePassword(
    password,
    user.hashedPassword,
    user.salt,
  );
  if (!isPasswordCorrect)
    return NextResponse.json({
      data: null,
      error: { message: "Invalid Credentials" },
    });

  const session: Session = { userId: user.id };

  await createUserSession(session, await cookies());

  return NextResponse.json({ data: { session }, error: null });
}

export async function signUp(request: Request) {
  const { email, password } = await request.json();

  const salt = generateSalt();
  const hashedPassword = await hashPassword(password, salt);

  const [user] = await db
    .insert(userTable)
    .values({
      email,
      hashedPassword,
      salt,
    })
    .returning();

  await createUserSession({ userId: user.id }, await cookies());
  return NextResponse.json({ data: { user }, error: null });
}

export async function signOut() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("session-id");

  if (!sessionId) {
    return NextResponse.json({
      data: null,
      error: { message: "Not logged in" },
    });
  }

  cookieStore.delete("session-id");
  await redisClient.del(`session:${sessionId.value}`);

  return NextResponse.json({
    data: { message: "Success" },
    error: null,
  });
}
