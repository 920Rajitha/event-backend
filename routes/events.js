const express = require("express");
const router = express.Router();
const { sql, poolPromise } = require("../db/sql");

router.post("/add", async (req, res) => {
  const { name, date, time, location, description } = req.body;
  try {
    const pool = await poolPromise;
    await pool.request()
      .input("Name", sql.NVarChar, name)
      .input("Date", sql.Date, date)
      .input("Time", sql.NVarChar, time)
      .input("Location", sql.NVarChar, location)
      .input("Description", sql.NVarChar, description)
      .query(`
        INSERT INTO Events (Name, Date, Time, Location, Description)
        VALUES (@Name, @Date, @Time, @Location, @Description)
      `);
    res.json({ message: "Event added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database insert error" });
  }
});

router.get("/all", async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM Events ORDER BY Date ASC");
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database fetch error" });
  }
});

module.exports = router;