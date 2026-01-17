import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const whatsappClicks = mysqlTable("whatsapp_clicks", {
  id: int("id").autoincrement().primaryKey(),
  tamalType: varchar("tamal_type", { length: 50 }).notNull(), // chancho, pollo, mixto, queso
  clientIp: varchar("client_ip", { length: 45 }),
  sessionId: varchar("session_id", { length: 128 }),
  userAgent: text("user_agent"),
  referrerUrl: text("referrer_url"),
  syncedToSheets: int("synced_to_sheets").default(0).notNull(), // 0 = no, 1 = yes
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type WhatsappClick = typeof whatsappClicks.$inferSelect;
export type InsertWhatsappClick = typeof whatsappClicks.$inferInsert;

export const sheetsSyncLog = mysqlTable("sheets_sync_log", {
  id: int("id").autoincrement().primaryKey(),
  syncedRecords: int("synced_records").notNull(),
  lastClickId: int("last_click_id"),
  syncStatus: varchar("sync_status", { length: 50 }).notNull(), // success, failed, pending
  errorMessage: text("error_message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type SheetsSyncLog = typeof sheetsSyncLog.$inferSelect;
export type InsertSheetsSyncLog = typeof sheetsSyncLog.$inferInsert;