import { json, error } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { notes } from '$lib/server/db/schema';
import { and, eq } from 'drizzle-orm';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, locals }) => {
  if (!locals.user) {
    throw error(401, 'Unauthorized');
  }

  const { title, content, parent } = await request.json();

  if (!title || typeof title !== 'string') {
    throw error(400, 'Note title is required');
  }

  const [newNote] = await db
    .insert(notes)
    .values({
      title,
      content: content || '',
      folderId: parent ? Number(parent) : null,
      userId: locals.user.id,
    })
    .returning();

  return json(newNote);
};

export const PATCH: RequestHandler = async ({ request, locals }) => {
  if (!locals.user) {
    throw error(401, 'Unauthorized');
  }

  const { id, title, content } = await request.json();

  if (!title || typeof title !== 'string') {
    throw error(400, 'Note title is required');
  }

  const [updatedNote] = await db
    .update(notes)
    .set({ title, content })
    .where(and(eq(notes.id, id), eq(notes.userId, locals.user.id)))
    .returning();

  return json(updatedNote);
};

export const DELETE: RequestHandler = async ({ request, locals }) => {
  if (!locals.user) {
    throw error(401, 'Unauthorized');
  }

  const userNotes = await db
    .delete(notes)
    .where(eq(notes.userId, locals.user.id))
    .returning();

  return json(userNotes);
}

export const GET: RequestHandler = async ({ locals }) => {
  if (!locals.user) {
    throw error(401, 'Unauthorized');
  }

  const userNotes = await db
    .select({
      id: notes.id,
      title: notes.title,
      content: notes.content,
      folderId: notes.folderId
    })
    .from(notes)
    .where(eq(notes.userId, locals.user.id));

  return json(userNotes);
};
