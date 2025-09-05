const express = require('express');
const router = express.Router();
const bookService = require('./bookService');

// GET /api/books
router.get('/', (req, res) => {
    setTimeout(() => {
        const books = bookService.getAllBooks();
        res.json(books);
    }, 180000); // 180 secs
});

// GET /api/books/{id}
router.get('/:id', (req, res) => {
    setTimeout(() => {
        const book = bookService.getBookById(parseInt(req.params.id));
        if (book) {
            res.json(book);
        } else {
            res.status(404).send('Book not found');
        }
    }, 180000); // 180 secs
});

// POST /api/books
router.post('/', (req, res) => {
    setTimeout(() => {
        const newBook = bookService.createBook(req.body);
        res.status(201).json(newBook);
    }, 180000); // 180 secs
});

// PUT /api/books/{id}
router.put('/:id', (req, res) => {
    setTimeout(() => {
        const updatedBook = bookService.updateBook(parseInt(req.params.id), req.body);
        if (updatedBook) {
            res.json(updatedBook);
        } else {
            res.status(404).send('Book not found');
        }
    }, 180000); // 180 secs
});

// DELETE /api/books/{id}
router.delete('/:id', (req, res) => {
    setTimeout(() => {
        const wasDeleted = bookService.deleteBook(parseInt(req.params.id));
        if (wasDeleted) {
            res.status(204).send(); // No content
        } else {
            res.status(404).send('Book not found');
        }
    }, 180000); // 180 secs
});

module.exports = router;