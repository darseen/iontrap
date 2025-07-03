import { InferSelectModel } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const settingsTable = pgTable("settings", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Settings = InferSelectModel<typeof settingsTable>;
