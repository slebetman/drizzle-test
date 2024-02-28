import { relations } from "drizzle-orm";
import { users } from "./users.mjs";
import { notes } from "./notes.mjs";

// We separate this from table definitions to avoid circular dependencies

export const userNotes = relations(users, ({ many }) => ({
  notes: many(notes),
}));

export const noteUser = relations(notes, ({ one }) => ({
  user: one(users, {
    fields: [notes.user],
    references: [users.id],
  }),
}));