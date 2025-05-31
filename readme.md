
# 📚 Book Management API

A simple RESTful API built using **Express.js** for managing a list of books. This API supports CRUD operations — Create, Read, Update, and Delete books.

## 🚀 Features

* View all books
* View a single book by ID
* Add a new book
* Update an existing book
* Delete a book

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd <your-project-directory>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the server:**

   ```bash
   node server.js
   ```

4. **Server will start at:**

   ```
   http://localhost:3000
   ```

## 📘 API Endpoints

| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| GET    | `/books`     | Get all books       |
| GET    | `/books/:id` | Get a book by ID    |
| POST   | `/books`     | Add a new book      |
| PUT    | `/books/:id` | Update book details |
| DELETE | `/books/:id` | Delete a book       |

## 📌 Example Request (POST `/books`)

```json
{
  "title": "The Alchemist",
  "author": "Paulo Coelho"
}
```
