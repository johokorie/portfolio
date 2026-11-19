export function safeUrl(value) {
  if (typeof value !== "string") return null;
  if (value.startsWith("/") && !value.startsWith("//") && !value.includes("\\")) return value;
  try { const url = new URL(value); return ["https:", "http:", "mailto:"].includes(url.protocol) ? value : null; } catch { return null; }
}

export function formatDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.valueOf()) ? "" : new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(date);
}

export function articleHref(slug) { return `/blog/read?post=${encodeURIComponent(slug)}`; }

export function normalizeArticle(article) {
  return {
    id: article.id, slug: article.slug, title: article.title, excerpt: article.excerpt,
    content: Array.isArray(article.content) ? article.content : [],
    category: article.category || "Development", coverUrl: safeUrl(article.coverUrl),
    coverAlt: article.coverAlt || article.title, featured: Boolean(article.featured),
    publishedAt: article.publishedAt, updatedAt: article.updatedAt,
  };
}
