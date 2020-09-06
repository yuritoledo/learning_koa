const Koa = require('koa')
const koaBody = require('koa-body')
const booksRouter = require('./booksRouter')
const app = new Koa()

app.use(booksRouter.routes())
app.use(koaBody())

app.listen(3000)