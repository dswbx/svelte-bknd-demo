import { createRuntimeApp, serveStaticViaImport } from "bknd/adapter";
import config from "../bknd.config";

export async function getApp() {
   return await createRuntimeApp(
      {
         ...config,
         adminOptions: {
            adminBasepath: "/admin",
         },
      },
      import.meta.env
   );
}

export async function getApi() {
   const app = await getApp();
   const api = app.getApi();
   return api;
}
