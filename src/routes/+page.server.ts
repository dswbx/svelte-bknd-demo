import { getApi } from "../bknd";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (opts) => {
   const { request } = opts;
   const api = await getApi({ headers: request.headers }, true);
   const user = api.getUser();
   const { data: todos } = await api.data.readMany("todos");

   return {
      todos,
      user,
   };
};
