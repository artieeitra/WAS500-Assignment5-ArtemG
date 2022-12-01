const mongoose = require("mongoose"),
  booksSchema = mongoose.Schema({
    name: String,
    author: String,
    description: String,
    year: String,
    image: String,
    ID: String
  });
module.exports = mongoose.model("books", booksSchema);