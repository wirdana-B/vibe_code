import { mysqlTable, varchar, int, mysqlEnum } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  nama: varchar("nama", { length: 256 }).notNull(),
  email: varchar("email", { length: 256 }).notNull().unique(),
  password: varchar("password", { length: 256 }).notNull(),
  role: mysqlEnum("role", ["admin", "user"]).default("user").notNull(),
});
