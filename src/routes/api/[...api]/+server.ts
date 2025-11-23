import { createFrameworkApp } from "bknd/adapter";
import type { RequestHandler } from "./$types";
import config from "../../../../bknd.config.ts";

const handler: RequestHandler = async ({ request }) => {
   const app = await createFrameworkApp(config);
   return app.fetch(request);
};

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
export const PATCH = handler;
export const OPTIONS = handler;
export const HEAD = handler;
