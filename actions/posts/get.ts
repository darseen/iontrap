"use server";

import { Post } from "@/types";
import { neon } from "@neondatabase/serverless";

export async function getPosts() {
  try {
    const sql = neon(process.env.DATABASE_URL!);
    const posts =
      (await sql`SELECT * FROM posts ORDER BY created_at DESC`) as Post[];

    return { data: { posts }, error: null };
  } catch (error) {
    console.log("get posts error: ", error);
    return { data: null, error: { message: "Something went wrong" } };
  }
}
