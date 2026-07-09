import { Elysia } from "elysia";
import { db } from "./db";
import { users } from "./db/schema";

const app = new Elysia()
  .get("/", () => Bun.file("src/frontend/login.html"))
  .get("/login", () => Bun.file("src/frontend/login.html"))
  .get("/login.css", () => Bun.file("src/frontend/login.css"))
  .get("/users", async () => {
    return await db.select().from(users);
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
