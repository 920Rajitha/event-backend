const sql = require("mssql");

const config = {
  user: "sa",
  password: "920@Rajitha",
  server: "localhost",
  database: "EventManagementDB",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log("✅ Connected to SQL Server");
    return pool;
  })
  .catch(err => {
    console.error("❌ Database Connection Failed!", err);
    process.exit(1);
  });

module.exports = { sql, poolPromise };