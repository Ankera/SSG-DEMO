import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import './styles.css'

const container = document.getElementById("root");

const initialData = {
  code: 3,
  msg: "Books selected",
  data: [
    { id: 1, type: "2", name: "计算机这是二次渲染", description: "这是初级教程" },
    { id: 2, type: "", name: "Java", description: "这是java高级教程" },
    { id: 3, type: "", name: "Java", description: "这是java高级教程" },
    { id: 4, type: "", name: "Java", description: "这是java高级教程" },
    { id: 5, type: "", name: "Java", description: "这是java高级教程" },
    { id: 6, type: "", name: "", description: "" },
    { id: 7, type: "", name: "", description: "" },
    { id: 8, type: "11", name: "222", description: "33" },
    {
      id: 9,
      type: "12",
      name: "javascript",
      description: "description",
    },
    {
      id: 10,
      type: "12",
      name: "javascript",
      description: "description",
    },
    {
      id: 11,
      type: "12",
      name: "javascript",
      description: "description",
    },
    {
      id: 12,
      type: "12",
      name: "javascript",
      description: "description",
    },
  ],
};

// 判断是 CSR 还是 SSG
if (container.hasChildNodes()) {
  // hydrateRoot(container, <App books={initialData} />);
  createRoot(container).render(<App books={initialData} />);
} else {
  createRoot(container).render(<App books={initialData} />);
}
