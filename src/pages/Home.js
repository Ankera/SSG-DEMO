import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../data/books';
import BookList from '../components/BookList';

const Home = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    fetchBooks().then(data => {
      setBooks(data);
    });
  }, []);

  return (
    <div>
      <h1>Welcome to the Book Store</h1>
      {books ? <BookList books={books} /> : <p>Loading...</p>}
    </div>
  );
};

export default Home;
