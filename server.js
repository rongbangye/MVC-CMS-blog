const express = require("express");
const routes = require("./routes/index");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });
});
