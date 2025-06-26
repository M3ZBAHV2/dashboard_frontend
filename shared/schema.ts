import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const dealers = pgTable("dealers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  address: text("address"),
  showCallLogs: boolean("show_call_logs").default(false),
  status: boolean("status").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const employees = pgTable("employees", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  status: boolean("status").default(true),
  departmentId: integer("department_id"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const departments = pgTable("departments", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const scenarios = pgTable("scenarios", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  department: text("department").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const leadSources = pgTable("lead_sources", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const roles = pgTable("roles", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const smsLogs = pgTable("sms_logs", {
  id: serial("id").primaryKey(),
  to: text("to").notNull(),
  message: text("message").notNull(),
  sentAt: timestamp("sent_at"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const pendingSms = pgTable("pending_sms", {
  id: serial("id").primaryKey(),
  to: text("to").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertDealerSchema = createInsertSchema(dealers).omit({
  id: true,
  createdAt: true,
});

export const insertEmployeeSchema = createInsertSchema(employees).omit({
  id: true,
  createdAt: true,
});

export const insertDepartmentSchema = createInsertSchema(departments).omit({
  id: true,
  createdAt: true,
});

export const insertScenarioSchema = createInsertSchema(scenarios).omit({
  id: true,
  createdAt: true,
});

export const insertLeadSourceSchema = createInsertSchema(leadSources).omit({
  id: true,
  createdAt: true,
});

export const insertRoleSchema = createInsertSchema(roles).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Dealer = typeof dealers.$inferSelect;
export type InsertDealer = z.infer<typeof insertDealerSchema>;
export type Employee = typeof employees.$inferSelect;
export type InsertEmployee = z.infer<typeof insertEmployeeSchema>;
export type Department = typeof departments.$inferSelect;
export type InsertDepartment = z.infer<typeof insertDepartmentSchema>;
export type Scenario = typeof scenarios.$inferSelect;
export type InsertScenario = z.infer<typeof insertScenarioSchema>;
export type LeadSource = typeof leadSources.$inferSelect;
export type InsertLeadSource = z.infer<typeof insertLeadSourceSchema>;
export type Role = typeof roles.$inferSelect;
export type InsertRole = z.infer<typeof insertRoleSchema>;
export type SmsLog = typeof smsLogs.$inferSelect;
export type PendingSms = typeof pendingSms.$inferSelect;
