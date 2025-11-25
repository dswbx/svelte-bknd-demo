import type { Handle } from "@sveltejs/kit";
import { getApp } from "./bknd.ts";

export const handle: Handle = async (opts) => {
   const { event, resolve } = opts;

   // initialize app on app request so you don't have to re-do
   await getApp(event.platform);

   // Make headers and api available to all routes via event.locals
   event.locals.headers = event.request.headers;

   return resolve(event);
};
