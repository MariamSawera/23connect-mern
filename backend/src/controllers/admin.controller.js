import Book from "../models/book.model.js";

// Add a book
export const addBook = async (req, res) => {
  try {
    const { name, author, semester, pictureUrl, driveLink } = req.body;
    const newBook = await Book.create({ name, author, semester, pictureUrl, driveLink });
    res.status(201).json(newBook);
  } catch (err) {
    console.error("Error in addBook:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update a book
export const updateBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, { new: true });
    if (!updatedBook) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(updatedBook);
  } catch (err) {
    console.error("Error in updateBook:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete a book
export const deleteBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const deletedBook = await Book.findByIdAndDelete(bookId);
    if (!deletedBook) return res.status(404).json({ message: "Book not found" });
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    console.error("Error in deleteBook:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get all books (can be public for students)
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    console.error("Error in getAllBooks:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
