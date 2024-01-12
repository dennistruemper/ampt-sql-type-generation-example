import { Kysely } from "@ampt/sql";
import { GeneratedAlways } from "kysely";

interface Database {
  todos: TodosTable;
}

interface TodosTable {
  id: GeneratedAlways<number>;
  caption: string;
  description: string; // typo on purpose to show how error prone this is
}

const db = new Kysely<Database>();

// Insert a post
const post = await db
  .insertInto("todos")
  .values({ caption: "My first todo", description: "This is my first todo!" })
  .returningAll()
  .executeTakeFirstOrThrow();
