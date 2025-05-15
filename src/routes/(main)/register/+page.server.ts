import type { PageServerLoad } from "./$types.js";
import { superValidate } from "sveltekit-superforms";
import { fail, redirect, text, type Actions } from "@sveltejs/kit";
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";
import { db } from "$lib/server/db/index.js";
import { users } from "$lib/server/db/schema.js";
import bcrypt from "bcrypt";
 
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
    
    const { email, password, firstName, lastName } = form.data;

    let user = await db.insert(users).values({
      email,
      password: await bcrypt.hash(password, 10),
      firstName,
      secondName: lastName,
    }).run();
    
    if (user.changes !== 1) {
      throw text("Something went wrong", { status: 500 });
    }

    throw redirect(302, "/login");
  },
};
