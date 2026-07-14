import { Elysia } from "elysia";
import { db } from "./db";
import { users } from "./db/schema";
import { eq } from "drizzle-orm";

const app = new Elysia()
  .get("/", () => Bun.file("src/frontend/login.html"))
  .get("/login", () => Bun.file("src/frontend/login.html"))
  .get("/login.css", () => Bun.file("src/frontend/login.css"))
  .get("/register", () => Bun.file("src/frontend/register.html"))
  .get("/register.css", () => Bun.file("src/frontend/register.css"))
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

    // Verifikasi password yang sudah di-hash
    const isValid = await Bun.password.verify(password, user.password);
    if (!isValid) {
      set.status = 401;
      return { success: false, message: "Password salah" };
    }

    return { success: true, message: "Login berhasil" };
  })
  .post("/api/register", async ({ body, set }) => {
    const data = body as Record<string, string>;
    const nama = data?.nama;
    const email = data?.email;
    const password = data?.password;
    const konfirmasi_password = data?.konfirmasi_password;

    if (!nama || !email || !password || !konfirmasi_password) {
      set.status = 400;
      return { success: false, message: "Semua field harus diisi" };
    }

    if (password !== konfirmasi_password) {
      set.status = 400;
      return { success: false, message: "Password dan konfirmasi tidak cocok" };
    }

    const existingUsers = await db.select().from(users).where(eq(users.email, email)).limit(1);
    if (existingUsers.length > 0) {
      set.status = 400;
      return { success: false, message: "Email sudah terdaftar" };
    }

    const hashedPassword = await Bun.password.hash(password);

    await db.insert(users).values({
      nama,
      email,
      password: hashedPassword,
      role: "user"
    });

    return { success: true, message: "Pendaftaran berhasil" };
  })
  .get("/forgot-password", () => Bun.file("src/frontend/forgot-password.html"))
  .get("/forgot-password.css", () => Bun.file("src/frontend/forgot-password.css"))
  .get("/reset-password", () => Bun.file("src/frontend/reset-password.html"))
  .get("/reset-password.css", () => Bun.file("src/frontend/reset-password.css"))
  .post("/api/forgot-password", async ({ body, set }) => {
    const data = body as Record<string, string>;
    const email = data?.email;

    if (!email) {
      set.status = 400;
      return { success: false, message: "Email diperlukan" };
    }

    const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
    
    if (result.length === 0) {
      set.status = 404;
      return { success: false, message: "Email tidak terdaftar" };
    }

    return { success: true, message: "Email ditemukan, silakan reset password" };
  })
  .post("/api/reset-password", async ({ body, set }) => {
    const data = body as Record<string, string>;
    const email = data?.email;
    const password = data?.password;

    if (!email || !password) {
      set.status = 400;
      return { success: false, message: "Email dan password diperlukan" };
    }

    const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
    
    if (result.length === 0) {
      set.status = 404;
      return { success: false, message: "Email tidak terdaftar" };
    }

    const hashedPassword = await Bun.password.hash(password);

    await db.update(users)
      .set({ password: hashedPassword })
      .where(eq(users.email, email));

    return { success: true, message: "Password berhasil direset" };
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
