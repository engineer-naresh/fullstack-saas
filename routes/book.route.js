const { fetchBooks, addBooks, updateBook, deleteBook, singleFetchBook} = require("../controllers/book.controller");

const router = require("express").Router();
router.route('/books').get(fetchBooks).post(addBooks);
router.route('/books/:id').put(updateBook).delete(deleteBook).get(singleFetchBook);
module.exports = router;