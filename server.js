const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
    { id: '1', title: 'Pather Panchali', author: 'Bibhutibhushan Bandyopadhyay' },
    { id: '2', title: 'Three Men in a Boat', author: 'Jerome K. Jerome' },
    { id: '3', title: 'Wings of Fire', author: 'Dr. A.P.J. Abdul Kalam' }
];

function generateId() {
    return (books.length+1).toString();
}

app.get('/books', (req, res) => {
    res.status(200).json(books);
});

app.get('/books/:id', (req, res) => {
    const { id } = req.params; 
    const book = books.find(b => b.id === id); 

    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

app.post('/books', (req, res) => {
    const { title, author } = req.body; 

    if (!title || !author) {
        return res.status(400).json({ message: 'Title and author are required' });
    }

    const newBook = {
        id: generateId(),
        title,
        author
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

app.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;

    const bookIndex = books.findIndex(b => b.id === id);

    if (bookIndex !== -1) {
        if (title) {
            books[bookIndex].title = title;
        }
        if (author) {
            books[bookIndex].author = author;
        }
        res.status(200).json(books[bookIndex]);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

app.delete('/books/:id', (req, res) => {
    const { id } = req.params; 

    const initialLength = books.length; 
    books = books.filter(b => b.id !== id);

    if (books.length < initialLength) {
        res.status(204).send(); 
    } else {
        res.status(404).json({ message: 'Book not found' }); 
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
