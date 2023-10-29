const express = require("express");
const app = express.Router();
const controller = require("../controllers/controller");

app.get("/", controller.getHomeData);

app.post("/add", controller.addFormData);

app.get("/show-expense", controller.showExpense);

app.get("/data", controller.data);

app.get("/delete-data/:id", controller.deleteData);
module.exports = app;
