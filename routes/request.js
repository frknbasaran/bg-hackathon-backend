import { Request } from '../core';
import KoaRouter from 'koa-router';

const Router = new KoaRouter();

/*
* @api {get} /requests Get All Requests
* @apiName GetAllRequests
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
            "travel":"59ac71d2bd20270bff10f175",
            "pack":"59ac71d2bd20270bff10f175",
            "status":"59ac71d2bd20270bff10f175"
        },
        {
            "_id": "59ac71d2bd20270bff10f175",
            "travel":"59ac71d2bd20270bff10f175",
            "pack":"59ac71d2bd20270bff10f175",
            "status":"59ac71d2bd20270bff10f175"
        },
        {
            "_id": "59ac71d2bd20270bff10f175",
            "travel":"59ac71d2bd20270bff10f175",
            "pack":"59ac71d2bd20270bff10f175",
            "status":"59ac71d2bd20270bff10f175"
        }
    ]
}
* */
Router.get('/v1/requests', Request.getAll);
/*
* @api {get} /requests/:id GetOneRequest
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
/*
* @api {post} /requests  Create Request
* @apiName CreateRequest
* @apiGroup Request
* @apiVersion 1.0.0
*
* @queryParam: travel {ObjectId}
* @queryParam: pack {ObjectId}
*
* */
Router.post('/v1/requests', Request.create);
/*
* @api {post} /requests  Create Request
* @apiName CreateRequest
* @apiGroup Request
* @apiVersion 1.0.0
*
* @apiParam: _id {ObjectId}
* @bodyParam: status {String}
*
* */
Router.put('/v1/requests/:id', Request.update);

export default Router;