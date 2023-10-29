const path = require("path");
const db = require("../models/appointment");
const { json } = require("body-parser");

exports.getHomeData = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "index.html"));
};

exports.addFormData = async (req, res, next) => {
  console.log(req.body.email);
  db.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  })
    .then((response) => {
      res.redirect("/");
    })
    .catch((err) => {});
};

exports.data = async (req, res, next) => {
  db.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {});
};

exports.showExpense = async (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "data.html"));
};

exports.deleteData = async (req, res, next) => {
  let que = req.params.id;
  await db.destroy({
    where: {
      id: que,
    },
  });
  res.redirect("/show-expense");
};
