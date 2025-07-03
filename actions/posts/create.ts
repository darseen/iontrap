"use server";

import { db } from "@/db";
import { postsTable } from "@/db/schema";
import { getSession } from "@/lib/auth/server/session";
import { cookies } from "next/headers";
import fs from "node:fs/promises";
import path from "node:path";

export default async function createPost(data: FormData) {
  const session = await getSession(await cookies());

  if (!session) return;

  const title = data.get("title") as string | null;
  const description = data.get("description") as string | null;
  const image = data.get("image") as File | null;

  if (!title || !description || !image) return;

  try {
    // save file to local storage
    const fileBytes = await image.arrayBuffer();
    const fileBuffer = Buffer.from(fileBytes);

    const uploadDir = path.join(process.cwd(), "/public/uploads");
    await fs.mkdir(uploadDir, { recursive: true });
    const filePath = path.join(uploadDir, image.name);

    await fs.writeFile(filePath, fileBuffer);

    // create post
    await db.insert(postsTable).values({
      title,
      description,
      imagePath: `/uploads/${image.name}`,
      userId: session.userId,
    });

    return;
  } catch (error) {
    console.log("create post error", error);
    return;
  }
}
