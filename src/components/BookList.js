import React from "react";

const jsonData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "deals",
  "brand": {
    "@type": "Brand",
    "name": "VEVOR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "100",
    "ratingCount": "80"
  }
};

const jsonLD = JSON.stringify(jsonData, null, 4);

const BookList = ({ books }) => {
  const list = books && Array.isArray(books.data) ? books.data : []
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: jsonLD}}></script>
      <h2>Book List</h2>
      <ul className="book_ul">
        {list.map((book) => (
          <li key={book.id}>
            <h3>{book.name || "Unknown Book"}</h3>
            <p>{book.description || "No description available"}</p>
            <p>Type: {book.type || "Unknown"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
