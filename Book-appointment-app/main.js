const express = require("express");
const routes = require("./routes/routes");
const bodyParser = require("body-parser");
const sequelize = require("./models/appointment");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

sequelize.sync().then(() => {
  app.listen("4000");
});
