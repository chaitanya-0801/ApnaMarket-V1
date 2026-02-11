const express = require("express");
const connectDB = require("./Config/database");
require("dotenv").config();
const app = express();0
app.use(express.json());

const PORT = process.env.PORT || 3000;
connectDB();


app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1", require("./Routes/BasicRoutes"));

app.listen(PORT, () => {
  console.log("App Started at", PORT);
});
