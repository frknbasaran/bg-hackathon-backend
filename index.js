/*
* Load dependencies
* */
import Koa from 'koa'
import Router from 'koa-router'
import BodyParser from 'koa-bodyparser'
import DotEnv from 'dotenv'
import KoaQS from 'koa-qs'
import KCors from 'koa2-cors'
import Response from './utils/response'


// Create app as a Koa Instance
const app = new Koa()
// Create router instance
const router = new Router()
// Activate qs module
KoaQS(app)
// initalize dotenv
DotEnv.config()

app
    // koa cors configuration
    .use(KCors({origin:'*'}))
    // inital body parser
    .use(BodyParser())
    .use(async (ctx) => {
        ctx.status = 404
        ctx.body = Response.error("Invalid api endpoint, please read docs.")
    })
    .listen(process.env.PORT)