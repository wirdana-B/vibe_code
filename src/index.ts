import { Elysia } from "elysia";
import { db } from "./db";
import { users } from "./db/schema";

const app = new Elysia()
  .get("/", () => Bun.file("src/frontend/login.html"))
  .get("/login", () => Bun.file("src/frontend/login.html"))
  .get("/login.css", () => Bun.file("src/frontend/login.css"))
  .get("/dashboard", () => Bun.file("src/frontend/dashboard.html"))
  .get("/dashboard.css", () => Bun.file("src/frontend/dashboard.css"))
  .get("/monitoring-posisi", () => Bun.file("src/frontend/monitoring-posisi.html"))
  .get("/monitoring-posisi.css", () => Bun.file("src/frontend/monitoring-posisi.css"))
  .get("/monitoring-battery", () => Bun.file("src/frontend/monitoring-battery.html"))
  .get("/monitoring-battery.css", () => Bun.file("src/frontend/monitoring-battery.css"))
  .get("/history", () => Bun.file("src/frontend/history.html"))
  .get("/history.css", () => Bun.file("src/frontend/history.css"))
  .get("/profile", () => Bun.file("src/frontend/profile.html"))
  .get("/profile.css", () => Bun.file("src/frontend/profile.css"))
  .get("/users", async () => {
    return await db.select().from(users);
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
