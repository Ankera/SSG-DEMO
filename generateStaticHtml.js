require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react']
});

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const App = require('./src/App').default;

// 从 books.js 中获取数据
const { fetchBooks } = require('./src/data/books');

async function generateHtml() {
  // 获取书籍数据
  const booksData = await fetchBooks();

  // 渲染组件并将数据传递给组件
  const appHtml = ReactDOMServer.renderToString(React.createElement(App, { books: booksData }));

  // 读取模板文件
  let template = fs.readFileSync(path.resolve(__dirname, 'public/index.html'), 'utf8');

  // 将渲染后的 HTML 注入到模板中
  let finalHtml = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  // 使用 Prettier 格式化 HTML，并设置缩进为 4 个空格
  finalHtml = await prettier.format(finalHtml, {
      parser: 'html',
      tabWidth: 4,
  });

  // 输出生成的 HTML 到一个文件
  fs.writeFileSync(path.resolve(__dirname, 'dist/index.html'), finalHtml, 'utf8');

  console.log('Static HTML generated and formatted successfully.');
}

generateHtml().catch(err => {
  console.error('Error generating static HTML:', err);
});
