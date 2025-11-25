import { createApp } from "bknd/adapter/cloudflare";
import config from "../config";
import type { ApiOptions } from "bknd/client";
import type { App } from "bknd";

let app: App;
export async function getApp(platform?: App.Platform) {
   if (!app) {
      app = await createApp(
         {
            ...config,
            adminOptions: {
               adminBasepath: "/admin",
               logoReturnPath: "/../",
            },
         },
         platform
      );
   }
   return app;
}

export async function getApi(options: ApiOptions = {}, verify = false) {
   const app = await getApp();
   const api = app.getApi(options);

   if (verify && options.headers) {
      await api.verifyAuth();
   }
   return api;
}
