import { createRuntimeApp } from "bknd/adapter";
import config from "../bknd.config";

export async function getApi() {
   const app = await createRuntimeApp(config, import.meta.env);
   const api = app.getApi();
   return api;
}
