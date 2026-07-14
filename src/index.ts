import { Elysia } from "elysia";
import { db } from "./db";
import { users } from "./db/schema";
import { eq } from "drizzle-orm";

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
  .post("/api/login", async ({ body, set }) => {
    const data = body as Record<string, string>;
    const email = data?.email;
    const password = data?.password;

    if (!email || !password) {
      set.status = 400;
      return { success: false, message: "Email dan password diperlukan" };
    }

    const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
    const user = result[0];

    if (!user) {
      set.status = 401;
      return { success: false, message: "Email tidak ditemukan" };
    }

    // Prototipe sederhana: verifikasi string biasa
    // (Bisa diganti dengan bcrypt/Bun.password.verify jika di-hash)
    if (user.password !== password) {
      set.status = 401;
      return { success: false, message: "Password salah" };
    }

    return { success: true, message: "Login berhasil" };
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
