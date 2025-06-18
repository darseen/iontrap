import { InferSelectModel, relations } from "drizzle-orm";
import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { userTable } from "./user";

export const postsTable = pgTable("posts", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").notNull(),
  title: varchar("title", { length: 50 }).notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const postRelations = relations(postsTable, ({ one }) => ({
  user: one(userTable, {
    fields: [postsTable.userId],
    references: [userTable.id],
  }),
}));

export type Post = InferSelectModel<typeof postsTable>;
