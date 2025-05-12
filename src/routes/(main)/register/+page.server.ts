import type { PageServerLoad } from "./$types.js";
import { superValidate } from "sveltekit-superforms";
import { fail, type Actions } from "@sveltejs/kit";
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";
 
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
    console.debug(form)
    console.log()
    return {
      form,
    };
  },
};