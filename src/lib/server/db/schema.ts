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
  email: text('email').notNull(),
  password: text('password').notNull(),
});

export type User = typeof users.$inferSelect;

export const folders = sqliteTable('folders', {
  id: integer('id').primaryKey({ autoIncrement: true }),

  userId: integer('user_id').references(() => users.id, { onDelete: 'cascade' }),

  name: text('name').notNull(),

  parentId: integer('parent_id').references((): AnySQLiteColumn => folders.id),
});

export const notes = sqliteTable('notes', {
  id: integer('id').primaryKey({ autoIncrement: true }),

  userId: integer('user_id').references(() => users.id, { onDelete: 'cascade' }),

  folderId: integer('folder_id').references(() => folders.id, { onDelete: 'cascade' }),

  title: text('title').notNull(),
  content: text('content').notNull(),
});
