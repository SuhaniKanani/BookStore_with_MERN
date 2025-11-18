const express = require('express');
const router = express.Router();
const BookController = require("../controller/book.Controller");

router.get("/", BookController.getBook);

module.exports = router;
