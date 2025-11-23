import type { Handle } from "@sveltejs/kit";
import { getApi } from "./bknd";

export const handle: Handle = async ({ event, resolve }) => {
   // Make headers and api available to all routes via event.locals
   event.locals.headers = event.request.headers;

   return resolve(event);
};
