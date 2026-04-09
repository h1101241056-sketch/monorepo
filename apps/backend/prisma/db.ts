import { PrismaClient } from "@prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const dbUrl =
  process.env.DATABASE_URL ||
  `file:${path.resolve(__dirname, "../dev.db")}`;

const adapter = new PrismaLibSql({
  url: dbUrl,
  authToken: process.env.DB_AUTH_TOKEN,
});

export const prisma = new PrismaClient({ adapter });