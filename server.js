const express = require("express");
const cors = require("cors");
const app = express();

// 🔄 Use environment port for Glitch or fallback to 5000
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Optional: basic health check
app.get('/', (req, res) => {
  res.send('✅ School Event Management API is running!');
});

// 📦 Your event routes
app.use("/api/events", require("./routes/events"));

// 🟢 Start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
