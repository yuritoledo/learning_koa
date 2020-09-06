const Router = require('koa-router')

const booksRouter = new Router({
  prefix: '/books'
});

const bookList = [
  { id: 101, name: 'Fight Club', author: 'Chuck Palahniuk' },
  { id: 102, name: 'Sharp Objects', author: 'Gillian Flynn' },
  { id: 103, name: 'Frankenstein', author: 'Mary Shelley' },
  { id: 101, name: 'Into The Wild', author: 'John Krakauer' }
];

booksRouter.get('/', (ctx, next) => {
  ctx.body = bookList;
  next()
});

module.exports = booksRouter