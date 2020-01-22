import Book from '../models/Book';

class BookController {
    async index(req, res) {
        const books = await Book.findAll();

        res.json(books);
    }
}

export default new BookController();
