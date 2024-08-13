export const fetchBooks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        "code": 3,
        "msg": "Books selected",
        "data": [
          { "id": 1, "type": "2", "name": "计算机", "description": "这是初级教程" },
          { "id": 2, "type": "", "name": "Java", "description": "这是java高级教程" },
          { "id": 3, "type": "", "name": "Java", "description": "这是java高级教程" },
          { "id": 4, "type": "", "name": "Java", "description": "这是java高级教程" },
          { "id": 5, "type": "", "name": "Java", "description": "这是java高级教程" },
          { "id": 6, "type": "", "name": "", "description": "" },
          { "id": 7, "type": "", "name": "", "description": "" },
          { "id": 8, "type": "11", "name": "222", "description": "33" },
          { "id": 9, "type": "12", "name": "javascript", "description": "description" },
          { "id": 10, "type": "12", "name": "javascript", "description": "description" },
          { "id": 11, "type": "12", "name": "javascript", "description": "description" },
          { "id": 12, "type": "12", "name": "javascript", "description": "description" }
        ]
      });
    }, 1000); // 延时 1 秒
  });
};
