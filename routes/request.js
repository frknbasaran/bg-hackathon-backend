import { Request } from '../core';
import KoaRouter from 'koa-router';

const Router = new KoaRouter();

/**
* @api {get} /v1/requests Get All Requests
* @apiName GetAllRequests
* @apiGroup Request
* @apiVersion 1.0.0
*
* @apiParam t ObjectId Travel id
* @apiParam p ObjectId Pack id
*
* @apiSuccessExample {json} Success-Response:
*   HTTP/1.1 200
 {
    "success": true,
    "data": [
        {
            _id: "5a883f3775e4b725e03a7ca1",
            pack: {
                _id: "5a883f3775e4b725e03a7c3e",
                user: "5a883f3675e4b725e03a7baf",
                weight: 46,
                to: "Havre de Grace",
                from: "Bethlehem",
                __v: 0,
                created_at: "2018-02-17T14:41:58.637Z"
            },
            travel: {
                _id: "5a883f3775e4b725e03a7c25",
                user: "5a883f3675e4b725e03a7b90",
                weight: 19,
                to: "Salt Lake City",
                from: "Joliet",
                date: "2018-05-04T14:41:59.374Z",
                __v: 0,
                created_at: "2018-02-17T14:41:58.646Z"
            },
            __v: 0,
            status: "PENDING",
            created_at: "2018-02-17T14:41:58.650Z"
        },
    ]
}
* */
Router.get('/v1/requests', Request.getAll);
/**
* @api {get} /v1/requests/:id Get One Request
* @apiName GetOneRequest
* @apiGroup Request
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
                "from":"Moskova",
                "to":"Paris",
                "weight":10,
                "user":{
                    "name":"Furkan Başaran",
                    "username":"frknbasaran"
                }
            },
            "pack": {
                "from":"Moskova",
                "to":"Paris",
                "weight":10,
                "user":{
                    "name":"Ömer Kantar",
                    "username":"omerkantar"
                }
            },
            "status":{
                "name":"PENDING"
            }
        }
    ]
}
*/
Router.get('/v1/requests/:id', Request.getOne);
/**
* @api {post} /v1/requests  Create Request
* @apiName CreateRequest
* @apiGroup Request
* @apiVersion 1.0.0
*
* @apiParam travel ObjectId
* @apiParam pack ObjectId
*
* */
Router.post('/v1/requests', Request.create);
/**
* @api {put} /v1/requests/:id  Update Request
* @apiName UpdateRequest
* @apiGroup Request
* @apiVersion 1.0.0
*
* @apiParam _id ObjectId
* @apiParam status String
*
* */
Router.put('/v1/requests/:id', Request.update);

export default Router;