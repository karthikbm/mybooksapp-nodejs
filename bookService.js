const bookRepository = require('./bookRepository');

class BookService {
    getAllBooks() {
        return bookRepository.findAll();
    }

    getBookById(id) {
        return bookRepository.findById(id);
    }

    createBook(book) {
        return bookRepository.save(book);
    }

    updateBook(id, updatedBook) {
        const bookExists = bookRepository.findById(id);
        if (!bookExists) {
            return null;
        }
        const bookToUpdate = { ...updatedBook, id: parseInt(id) };
        return bookRepository.save(bookToUpdate);
    }

    deleteBook(id) {
        return bookRepository.delete(id);
    }
}

module.exports = new BookService();