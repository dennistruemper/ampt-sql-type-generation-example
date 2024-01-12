import { Kysely } from "@ampt/sql";
import { DB } from "./src/sql/dbTypes.js";

const db = new Kysely<DB>();

// Insert a todo
const todo = await db
  .insertInto("todos")
  .values({
    caption: "My first todo",
    description: "This is my first todo!",
    done: false,
  })
  .returningAll()
  .executeTakeFirstOrThrow();

const todos = await db.selectFrom("todos").selectAll().execute();

todos.map((t) => t.done.valueOf()); // hord to see error here
