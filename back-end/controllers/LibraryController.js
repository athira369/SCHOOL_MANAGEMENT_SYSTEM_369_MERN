import {Library} from "../model/LibrarySchema.js";

const LibraryController ={
// Add a new book
addBook : async (req, res) => {
  console.log("ddddddddddddddddddddddddddd");
  try {
    const { title, author, ison,status } = req.body;

    if (!title || !author || !ison ||!status) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newBook = new Library({ title, author, ison,status });
    await newBook.save();
    res.status(201).json({ message: 'Book added successfully', book: newBook });
  } catch (error) {
    console.error('Error adding book:', error);
    res.status(500).json({ message: 'Failed to add book', error });
  }
},

// Get all books
getAllBooks : async (req, res) => {
  try {
    const books = await Library.find();
    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ message: 'Failed to fetch books', error });
  }
},
};
export default LibraryController;

