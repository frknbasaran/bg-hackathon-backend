import { Travel } from '../core';
import KoaRouter from 'koa-router';

const Router = new KoaRouter();

/*
* @api {get} /travels Get All Travels
* @apiName GetAllTravels
* @apiGroup Travel
* @apiVersion 1.0.0
*
* @apiSuccessExample {json} Success-Response:
*   HTTP/1.1 200
 {
    "success": true,
    "data": [
        {
            "_id": "59ac71d2bd20270bff10f175",
            "from": "Istanbul",
            "to": "Moskova",
            "user":"59ac71d2bd20270bff10f175",
            "weight":10
        },
        {
            "_id": "59ac71d2bd20270bff10f175",
            "from": "Istanbul",
            "to": "Moskova",
            "user":"59ac71d2bd20270bff10f175",
            "weight":10
        }
        {
            "_id": "59ac71d2bd20270bff10f175",
            "from": "Istanbul",
            "to": "Moskova",
            "user":"59ac71d2bd20270bff10f175",
            "weight":10
        }
    ]
}
* */
Router.get('/v1/travels', Travel.getAll);
/*
* @api {get} /travels/:id GetOneTravel
* @apiName GetOneTravel
* @apiGroup Travel
* @apiVersion 1.0.0
*
* @apiSuccessExample {json} Success-Response:
*   HTTP/1.1 200
 {
    "success": true,
    "data": [
        {
            "_id": "59ac71d2bd20270bff10f175",
            "user": {
                "username":"frknbasaran",
                "name":"Furkan BASARAN",
                "photo":"https://gravatar.com/avatar/sjkdfjsdf7238rfwe",
                "reputation":10
            },
            "from": "Istanbul",
            "to":"Moskova",
            "weight":10
        }
    ]
}
*/
Router.get('/v1/travels/:id', Travel.getOne);
/*
* @api {post} /travels  Create Travel
* @apiName CreateTravel
* @apiGroup Travel
* @apiVersion 1.0.0
*
* @apiParam: from {String}
* @apiParam: to {String}
* @apiParam: weight {Number}
* @apiParam: user {ObjectId}
*
* */
Router.post('/v1/travels', Travel.create);

export default Router;