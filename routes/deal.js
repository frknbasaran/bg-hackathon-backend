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
/*
* @api {get} /deals/:id GetOneDeal
* @apiName GetOneDeal
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
            "travel": {
                "user":"59ac71d2bd20270bff10f175",
                "from":"Istanbul",
                "to":"Dubai",
                "weight":10
            },
            "pack": {
                "user":"59ac71d2bd20270bff10f175",
                "from":"Istanbul",
                "to":"Dubai",
                "weight":9
            }
        }
    ]
}
*/
Router.get('/v1/deals/:id', Deal.getOne);
/*
* @api {post} /deals    Create Deal
* @apiName CreateDeal
* @apiGroup Deal
* @apiVersion 1.0.0
*
* @apiParam: travel {ObjectId}
* @apiParam: pack {ObjectId}
*
* */
Router.post('/v1/deals', Deal.create);

export default Router;