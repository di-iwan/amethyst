import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { getUserTree } from "$lib/tree";

export const GET: RequestHandler = async ({ locals }) => {
  if (!locals.user) {
    throw error(401, 'Unauthorized');
  }

  return json(await getUserTree(locals.user.id));
};