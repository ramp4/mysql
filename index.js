const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const sequelize = require("./utils/database");
const todoRoutes = require("./routes/todo");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use("/api/todo", todoRoutes);

app.use((req, res, next) => {
  res.sendFile("/index.html");
});

async function start() {
  try {
    await sequelize.sync();
  } catch (error) {
    console.log(error);
  }
}

start();

app.listen(PORT);
