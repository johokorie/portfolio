import { pgTable, pgSchema, serial, text, varchar, timestamp, jsonb, boolean } from "drizzle-orm/pg-core";

// Deployment-managed bootstrap state. Credentials are generated only at runtime.
export const cmsRuntime = pgTable("portfolio_cms_runtime", {
  id: text("id").primaryKey(),
  value: text("value").notNull(),
});

export const strapiSchema = pgSchema("strapi");

// Strapi manages its own tables in the separate strapi schema. This declaration
// reserves that schema for it without coupling public reads to its internals.
export const cmsMarker = strapiSchema.table("portfolio_installation", {
  id: serial("id").primaryKey(),
  installedAt: timestamp("installed_at", { withTimezone: true }).defaultNow(),
});

// A public read model populated by Strapi document lifecycle events.
export const blogPosts = pgTable("portfolio_blog_posts", {
  id: text("id").primaryKey(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  title: varchar("title", { length: 200 }).notNull(),
  excerpt: text("excerpt").notNull(),
  content: jsonb("content").notNull(),
  category: varchar("category", { length: 80 }).notNull().default("Development"),
  coverUrl: text("cover_url"),
  coverAlt: text("cover_alt"),
  featured: boolean("featured").notNull().default(false),
  publishedAt: timestamp("published_at", { withTimezone: true }).notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull(),
});
