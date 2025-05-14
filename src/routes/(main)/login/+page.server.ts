import type { PageServerLoad } from "./$types.js";
import { superValidate } from "sveltekit-superforms";
import { fail, redirect, type Actions } from "@sveltejs/kit";
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";
import { db } from "$lib/server/db/index.js";
import { users } from "$lib/server/db/schema.js";
import * as auth from "$lib/server/auth.js";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
 
export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(formSchema)),
  };
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(formSchema));
    
    if (!form.valid) {
      return fail(400, {
        form,
      });
    }

    const { email, password } = form.data;

		const user = db
      .select()
      .from(users)
      .where(eq(users.email, email)) // или userTable.email — как у тебя называется поле
      .get();

		if (!user || !(await bcrypt.compare(password, user.password))) {
			form.errors = { password: ["Неверный email или пароль"] };
			return fail(400, { form });
		}

    const token = await auth.generateSessionToken();

		const session = await auth.createSession(token, user.id);
		auth.setSessionTokenCookie(event, token, session.expiresAt);

		throw redirect(302, "/");
  },
};