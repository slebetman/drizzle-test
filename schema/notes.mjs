import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const notes = sqliteTable("notes", {
  id: integer("id").primaryKey(),
  user: integer("user"),
  index: integer("index"),
  title: text("title"),
  content: text("content"),
  color: text("color"),
});
