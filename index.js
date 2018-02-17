/*
* Load dependencies
* */
import Koa from 'koa';
import Router from 'koa-router';
import BodyParser from 'koa-bodyparser';
import DotEnv from 'dotenv';
import KoaQS from 'koa-qs';
import KCors from 'koa2-cors';
import Response from './utils/response';

// routes
import UserRouter from './routes/user';
import DealRouter from './routes/deal';
import TravelRouter from './routes/travel';
import PackRouter from './routes/pack';

// Create app as a Koa Instance
const app = new Koa();
// Create router instance
const router = new Router();
// Activate qs module
KoaQS(app);
// initalize dotenv
DotEnv.config();

app
    // koa cors configuration
    .use(KCors({origin:'*'}))
    // inital body parser
    .use(BodyParser())
    .use(UserRouter.routes())
    .use(DealRouter.routes())
    .use(TravelRouter.routes())
    .use(PackRouter.routes())
    .use(async (ctx) => {
        ctx.status = 404
        ctx.body = Response.error("Invalid api endpoint, please read docs.")
    })
    .listen(process.env.PORT);