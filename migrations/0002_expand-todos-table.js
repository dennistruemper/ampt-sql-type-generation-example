export async function up(db) {
  await db.schema
    .alterTable("todos")
    .addColumn("done", "bool") // no not null constraint
    .execute();
}

export async function down(db) {
  await db.schema.dropTable("todos").execute();
}
