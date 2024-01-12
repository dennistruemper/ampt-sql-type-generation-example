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

// Insert a post
const post = await db
  .insertInto("todos")
  .values({
    caption: "My first todo",
    description: "This is my first todo!",
    done: false,
  })
  .returningAll()
  .executeTakeFirstOrThrow();
