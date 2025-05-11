const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/events", require("./routes/events"));

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});