import React, { useState, useEffect } from 'react';
import { fetchBooks } from './data/books';
import BookList from './components/BookList';

const App = ({ books, layouts_component_aside }) => {
  const [bookData, setBookData] = useState(books || null);

  useEffect(() => {
   // 如果没有通过 props 传递数据，则在客户端获取
   fetchBooks().then(data => {
    data.data[0].name = "这是CSR渲染之后更新的数据这是三次渲染"
    data.data[1].name = "这是CSR渲染之后更新的数据这是三次渲染"
    setBookData(data)
   });
  }, [books]);

  useEffect(() => {
    const blade = document.getElementById("blade");
    blade.style.opacity = 1;
  }, [])

  return (
    <div>
      <div id="blade" style={{opacity: 0}}>这是blade替换位置 {layouts_component_aside}</div>
      <h1>Welcome to the Book Store</h1>
      <BookList books={bookData} />
    </div>
  );
};

export default App;
