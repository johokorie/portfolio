module.exports = ({ env }) => ({
  host: "0.0.0.0",
  port: env.int("PORT", 1337),
  proxy: { koa: true },
  app: { keys: env.array("APP_KEYS") },
  cron: { enabled: false },
});
