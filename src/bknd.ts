import { createRuntimeApp, serveStaticViaImport } from "bknd/adapter";
import config from "../bknd.config";
import type { ApiOptions } from "bknd/client";

export async function getApp() {
   return await createRuntimeApp(
      {
         ...config,
         adminOptions: {
            adminBasepath: "/admin",
            logoReturnPath: "/../",
         },
      },
      import.meta.env
   );
}

export async function getApi(options: ApiOptions = {}, verify = false) {
   const app = await getApp();
   const api = app.getApi(options);

   if (verify && options.headers) {
      await api.verifyAuth();
   }
   return api;
}
