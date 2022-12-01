const bmodel = require("../models/books");

exports.getAllBooks = (req, res, next) => {
  bmodel.find({}, (error, books) => {
    if (error) next(error);
    req.data = books;
    next();
  });
};

exports.Book1 = (req, res, next) => {
  bmodel.find({ID: "1"}, (error, book1) => {
    if (error) next(error);
    req.data = book1;
    next();
  });
};
exports.Book2 = (req, res, next) => {
  bmodel.find({ID: "2"}, (error, book2) => {
    if (error) next(error);
    req.data = book2;
    next();
  });
};
exports.Book3 = (req, res, next) => {
  bmodel.find({ID: "3"}, (error, book3) => {
    if (error) next(error);
    req.data = book3;
    next();
  });
};
