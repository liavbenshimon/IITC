const Book = require('../Model/booksModels.js');

// Create a new book
exports.createBook = async (req, res) => {
    try {
        const books = req.body;

        // בדוק אם ה-body הוא מערך
        if (!Array.isArray(books)) {
            return res.status(400).json({ message: "Request body must be an array of books." });
        }

        // בדוק אם כל ספר במערך מכיל את כל השדות הנדרשים
        for (const book of books) {
            const { title, author, publishedYear, genre, pages } = book;

            if (!title || !author || !publishedYear || !genre || !pages) {
                return res.status(400).json({ message: 'All fields are required for each book.' });
            }
        }

        // שמור את כל הספרים במאגר הנתונים
        const savedBooks = await Book.insertMany(books);
        res.status(201).json(savedBooks);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a book by ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a book by ID
exports.updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a book by ID
exports.deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
