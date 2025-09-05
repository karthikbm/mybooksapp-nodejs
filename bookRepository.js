const Book = require('./bookModel');

class BookRepository {
    constructor() {
        this.books = [];
        this.counter = 0;
        this.initializeBooks();
    }

    initializeBooks() {
        this.save(new Book(null, "The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 1979));
        this.save(new Book(null, "1984", "George Orwell", 1949));
        this.save(new Book(null, "To Kill a Mockingbird", "Harper Lee", 1960));
    }

    findAll() {
        return this.books;
    }

    // findById(id) {
    //     const book = this.books.find(b => b.id === id);
    //     return book ? book : null;
    // }

    findById(publicationYear) {
        const book = this.books.find(b => b.publicationYear === publicationYear);
        return book ? book : null;
    }

    save(book) {
        if (!book.id) {
            this.counter++;
            const newBook = new Book(this.counter, book.title, book.author, book.publicationYear);
            this.books.push(newBook);
            return newBook;
        } else {
            // Update logic: find and replace
            const index = this.books.findIndex(b => b.id === book.id);
            if (index !== -1) {
                this.books[index] = book;
                return book;
            } else {
                // Book with given ID does not exist, so save it as a new book
                this.books.push(book);
                return book;
            }
        }
    }

    delete(id) {
        const initialLength = this.books.length;
        this.books = this.books.filter(b => b.id !== id);
        return this.books.length < initialLength; // Return true if a book was deleted
    }
}

module.exports = new BookRepository();