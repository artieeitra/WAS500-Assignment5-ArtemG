const mongoose = require("mongoose");
const books = require("./models/books");

const booksController = require("./controllers/booksController");
const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.set("port", process.env.PORT || 3000);

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

require("dotenv").config();
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useUnifiedTopology: true });

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});
app.get('/home', (req, res) => {
  res.render("Home")
})
app.get("/booksList",
  booksController.getAllBooks,
  (req, res, next) => {
    console.log(req.data);
    res.render("booksList", { books: req.data });
  }
);
app.get('/1', booksController.Book1, (req, res, next) => {
  res.render("1", { book1: req.data })
})
app.get('/2', booksController.Book2, (req, res, next) => {
  res.render("2", { book2: req.data })
})
app.get('/3', booksController.Book3, (req, res, next) => {
  res.render("3", { book3: req.data })
})
app.use(express.static('public'))

app.get('*', function(req, res){
  res.status(404).render('404')
});
app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});