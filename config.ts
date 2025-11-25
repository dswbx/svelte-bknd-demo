import { type BkndConfig, em, entity, text, boolean } from "bknd";

const schema = em({
   todos: entity("todos", {
      title: text(),
      done: boolean(),
   }),
});

export default {
   config: {
      data: schema.toJSON(),
   },
   options: {
      seed: async (ctx) => {
         await ctx.em.mutator("todos").insertMany([
            { title: "Buy groceries", done: false },
            { title: "Walk the dog", done: true },
            { title: "Read a book", done: false },
         ]);
      },
   },
} satisfies BkndConfig;
