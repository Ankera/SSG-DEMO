import React from 'react';
import './booklist.css';

const BookList = ({ books }) => {
  return (
    <div>
      <h2>Book List</h2>
      <ul className='ul'>
        {(books.data || []).map((book) => (
          <li key={book.id}>
            <h3>{book.name || 'Unknown Book'}</h3>
            <p>{book.description || 'No description available'}</p>
            <p>Type: {book.type || 'Unknown'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;

