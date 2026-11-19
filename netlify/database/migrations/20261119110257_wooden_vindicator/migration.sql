CREATE SCHEMA "strapi";
--> statement-breakpoint
CREATE TABLE "portfolio_blog_posts" (
	"id" text PRIMARY KEY,
	"slug" varchar(255) NOT NULL UNIQUE,
	"title" varchar(200) NOT NULL,
	"excerpt" text NOT NULL,
	"content" jsonb NOT NULL,
	"category" varchar(80) DEFAULT 'Development' NOT NULL,
	"cover_url" text,
	"cover_alt" text,
	"featured" boolean DEFAULT false NOT NULL,
	"published_at" timestamp with time zone NOT NULL,
	"updated_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "strapi"."portfolio_installation" (
	"id" serial PRIMARY KEY,
	"installed_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "portfolio_cms_runtime" (
	"id" text PRIMARY KEY,
	"value" text NOT NULL
);
