export async function up(db) {
  await db.schema
    .createTable("todos")
    .addColumn("id", "serial", (col) => col.primaryKey())
    .addColumn("caption", "text", (col) => col.notNull())
    .addColumn("description", "text", (col) => col.notNull())
    .execute();
}

export async function down(db) {
  await db.schema.dropTable("posts").execute();
}
