const { fetchBooks, addBooks, updateBook, deleteBook } = require("../controllers/book.controller");

const router = require("express").Router();
router.route('/books').get(fetchBooks).post(addBooks).patch(updateBook).delete(deleteBook);
module.exports = router;