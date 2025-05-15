import {
  sqliteTable,
  text,
  integer,
  type AnySQLiteColumn,
} from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  firstName: text('first_name').notNull(),
  secondName: text('second_name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
});

export type User = typeof users.$inferSelect;

export const sessions = sqliteTable("session", {
	id: text("id").primaryKey(),
	userId: integer("user_id").notNull().references(() => users.id),
	expiresAt: integer("expires_at", { mode: "timestamp_ms" }).notNull()
});

export type Session = typeof sessions.$inferSelect;

export const folders = sqliteTable('folders', {
  id: integer('id').primaryKey({ autoIncrement: true }),

  userId: integer('user_id').references(() => users.id, { onDelete: 'cascade' }),

  name: text('name').notNull(),

  parentId: integer('parent_id').references((): AnySQLiteColumn => folders.id),
});

export type Folder = typeof folders.$inferSelect;

export const notes = sqliteTable('notes', {
  id: integer('id').primaryKey({ autoIncrement: true }),

  userId: integer('user_id').references(() => users.id, { onDelete: 'cascade' }),

  folderId: integer('folder_id').references(() => folders.id, { onDelete: 'cascade' }),

  title: text('title').notNull(),
  content: text('content').notNull(),
});

export type Note = typeof notes.$inferSelect;
