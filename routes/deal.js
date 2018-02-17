import { Deal } from '../core';
import KoaRouter from 'koa-router';

const Router = new KoaRouter();

/*
* @api {get} /deals Get All Deals
* @apiName GetAllDeals
* @apiGroup Deal
* @apiVersion 1.0.0
*
* @apiSuccessExample {json} Success-Response:
*   HTTP/1.1 200
 {
    "success": true,
    "data": [
        {
            "_id": "59ac71d2bd20270bff10f175",
            "travel": "59ac71d2bd20270bff10f175",
            "pack": "59ac71d2bd20270bff10f175"
        },
        {
            "_id": "59ac71d2bd20270bff10f175",
            "travel": "59ac71d2bd20270bff10f175",
            "pack": "59ac71d2bd20270bff10f175"
        },
        {
            "_id": "59ac71d2bd20270bff10f175",
            "travel": "59ac71d2bd20270bff10f175",
            "pack": "59ac71d2bd20270bff10f175"
        },
    ]
}
* */
Router.get('/v1/deals', Deal.getAll);


export default Router;