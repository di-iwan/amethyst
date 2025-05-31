import { json, error } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { folders } from '$lib/server/db/schema';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, locals }) => {
  if (!locals.user) {
    throw error(401, 'Unauthorized');
  }

  const { name, parent } = await request.json();

  if (!name || typeof name !== 'string') {
    throw error(400, 'Folder name is required');
  }

  const [newFolder] = await db
    .insert(folders)
    .values({
      name,
      userId: locals.user.id,
      parentId: parent ?? null
    })
    .returning();

  return json(newFolder);
};

export const PATCH: RequestHandler = async ({ request, locals }) => {
  if (!locals.user) {
    throw error(401, 'Unauthorized');
  }

  const { id, name } = await request.json();

  if (!name || typeof name !== 'string') {
    throw error(400, 'Folder name is required');
  }

  const [updatedFolder] = await db
    .update(folders)
    .set({ name })
    .where({ id, userId: locals.user.id })
    .returning();

  return json(updatedFolder);
};