import { Kysely } from "@ampt/sql";
import { GeneratedAlways } from "kysely";

interface Database {
  todos: TodosTable;
}

interface TodosTable {
  id: GeneratedAlways<number>;
  caption: string;
  description: string;
  done: boolean; // This column is not nullable by type even though it is in the database
}

const db = new Kysely<Database>();

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

const todos = await db // remember our first todos do not have done column and it is allowed to be null in database
  .selectFrom("todos")
  .selectAll()
  .execute();

todos.map((t) => t.done.valueOf());
