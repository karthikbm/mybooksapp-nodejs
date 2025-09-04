const express = require('express');
const router = express.Router();
const bookService = require('./bookService');

// GET /api/books
router.get('/', (req, res) => {
    const books = bookService.getAllBooks();
    res.json(books);
});

// GET /api/books/{id}
router.get('/:id', (req, res) => {
    const book = bookService.getBookById(parseInt(req.params.id));
    if (book) {
        res.json(book);
    } else {
        res.status(404).send('Book not found');
    }
});

// POST /api/books
router.post('/', (req, res) => {
    const newBook = bookService.createBook(req.body);
    res.status(201).json(newBook);
});

// PUT /api/books/{id}
router.put('/:id', (req, res) => {
    const updatedBook = bookService.updateBook(parseInt(req.params.id), req.body);
    if (updatedBook) {
        res.json(updatedBook);
    } else {
        res.status(404).send('Book not found');
    }
});

// DELETE /api/books/{id}
router.delete('/:id', (req, res) => {
    const wasDeleted = bookService.deleteBook(parseInt(req.params.id));
    if (wasDeleted) {
        res.status(204).send(); // No content
    } else {
        res.status(404).send('Book not found');
    }
});

module.exports = router;