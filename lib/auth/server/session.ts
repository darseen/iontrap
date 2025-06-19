import crypto from "node:crypto";
import redisClient from "../../redis";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { db } from "@/db";
import { userTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Session } from "../types";

const EXPIRATION_TIME = 60 * 60;

export async function getUser(cookieStore: ReadonlyRequestCookies) {
  const session = await getSession(cookieStore);
  if (!session) return null;

  const [user] = await db
    .select()
    .from(userTable)
    .where(eq(userTable.id, session.userId));

  // Could've selected the data I want in the db query, but with this I don't have to come back and modify it if I add other fields later.
  const { hashedPassword, salt, ...restOfUserData } = user;

  return restOfUserData;
}

export async function getSession(cookieStore: ReadonlyRequestCookies) {
  const sessionId = cookieStore.get("session-id");
  if (!sessionId) return null;

  const session = await redisClient.get(`session:${sessionId}`);
  if (!session) return null;

  return JSON.parse(session) as Session;
}

export async function createUserSession(
  session: Session,
  cookieStore: ReadonlyRequestCookies,
) {
  const sessionId = crypto.randomBytes(32).toString("hex");
  // set session cookie
  setCookie(sessionId, cookieStore);
  // set redis session
  await redisClient.setex(
    `session:${sessionId}`,
    EXPIRATION_TIME,
    JSON.stringify(session),
  );
}

export async function setCookie(
  sessionId: string,
  cookieStore: ReadonlyRequestCookies,
) {
  cookieStore.set("session-id", sessionId, {
    path: "/",
    httpOnly: true,
    secure: false, // TODO: change to true when you have a proper SSL cert
    sameSite: "lax",
    expires: new Date(Date.now() + EXPIRATION_TIME * 1000),
  });
}
