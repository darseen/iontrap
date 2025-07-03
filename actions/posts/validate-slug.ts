"use server";

import { db } from "@/db";
import { settingsTable } from "@/db/schema";
import { getSession } from "@/lib/auth/server/session";
import { cookies } from "next/headers";

export default async function validateSlug(slug: string) {
  const session = await getSession(await cookies());
  console.log("session: ", session);
  if (!session) return { data: null, error: { message: "Unauthorized" } };
  if (!slug) return { data: null, error: { message: "Slug is required" } };
  try {
    const [settings] = await db.select().from(settingsTable);

    if (!settings)
      return { data: null, error: { message: "Settings not found" } };

    if (settings.slug !== slug)
      return { data: null, error: { message: "Slug is not valid" } };

    return { data: {}, error: null };
  } catch (error) {
    console.log("validate slug error", error);
    return { data: null, error: { message: "Something went wrong" } };
  }
}
