const Router = require('koa-router')

const booksRouter = new Router({
    prefix: '/books'
});

const bookList = [
    {
        name: 'Senhor dos anéis',
        name: 'O milagre da manhã',
        name: '10% mais feliz',
    }
];

booksRouter.get('/', (ctx, next) => {
    ctx.body = bookList;
    next();
});

module.exports = booksRouter