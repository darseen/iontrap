"use server";

import { db } from "@/db";
import { postsTable } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function getPosts() {
  try {
    const posts = await db
      .select()
      .from(postsTable)
      .orderBy(desc(postsTable.createdAt));

    return { data: { posts }, error: null };
  } catch (error) {
    console.log("get posts error: ", error);
    return { data: null, error: { message: "Something went wrong" } };
  }
}
