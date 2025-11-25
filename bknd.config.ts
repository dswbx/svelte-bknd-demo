import config from "./config.ts";
import { withPlatformProxy } from "bknd/adapter/cloudflare/proxy";

export default withPlatformProxy(config, {
   useProxy: true,
});
