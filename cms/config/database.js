const { getConnectionString } = require("@netlify/database");

module.exports = () => ({
  connection: {
    client: "postgres",
    connection: { connectionString: getConnectionString(), schema: "strapi" },
    pool: { min: 0, max: 4 },
    acquireConnectionTimeout: 15000,
  },
});
