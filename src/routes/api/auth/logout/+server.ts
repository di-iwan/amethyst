import type { RequestHandler } from './$types';
import * as auth from '$lib/server/auth.js';

export const POST: RequestHandler = async (event) => {

  // Удаляем куки сессии
  auth.deleteSessionTokenCookie(event);
  if (event.locals.session) await auth.invalidateSession(event.locals.session?.id);

  // Очищаем locals
  event.locals.user = null;
  event.locals.session = null;

  return new Response(null, {
    status: 200
  });
};