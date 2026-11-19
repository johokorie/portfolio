module.exports = ({ env }) => ({
  url: "/admin",
  auth: { secret: env("ADMIN_JWT_SECRET") },
  apiToken: { salt: env("API_TOKEN_SALT") },
  transfer: { token: { salt: env("TRANSFER_TOKEN_SALT") } },
  secrets: { encryptionKey: env("ENCRYPTION_KEY") },
  flags: { nps: false, promoteEE: false },
});
