import type { PageServerLoad } from "./$types.js";
import { superValidate } from "sveltekit-superforms";
import { fail, redirect, text, type Actions } from "@sveltejs/kit";
import { zod } from "sveltekit-superforms/adapters";
import { db } from "$lib/server/db/index.js";
import { users } from "$lib/server/db/schema.js";
import bcrypt from "bcrypt";
import * as auth from "$lib/server/auth.js";
 
export const load: PageServerLoad = async ({ locals }) => {
  const user = locals.user;

  if (!user) {
    throw redirect(302, "/login");
  }
  
  return {
    user,
  };
};

export const actions: Actions = {
  logout: async (event) => {
    auth.deleteSessionTokenCookie(event);
    event.locals.user = null;
    event.locals.session = null;
    throw redirect(302, '/');
  }
};