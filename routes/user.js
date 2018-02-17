import { User } from '../core';
import KoaRouter from 'koa-router';

const Router = new KoaRouter();

/*
* @api {get} /users Get All Users
* @apiName GetAllUsers
* @apiGroup User
* @apiVersion 1.0.0
*
* @apiSuccessExample {json} Success-Response:
*   HTTP/1.1 200
 {
    "success": true,
    "data": [
        {
            "_id": "59ac71d2bd20270bff10f175",
            "name": "Furkan BAŞARAN",
            "username": "frknbasaran",
            "email:"frknbasaran@gmail.com",
            "photo":"https://gravatar.com/avatar/3r3hhr32rjhr2h3jrhjfj2",
            "registered_at":"2018-01-01 23:59:59",
            "reputation":10
        },
        {
            "_id": "59ac71d2bd20270bff10f175",
            "name": "Ömer Kantar",
            "username": "omerkantar",
            "email:"omerkantar@gmail.com",
            "photo":"https://gravatar.com/avatar/3r3hhr32rjhr2h3jrhjfj2",
            "registered_at":"2018-01-01 23:59:59",
            "reputation":15
        },
        {
            "_id": "59ac71d2bd20270bff10f175",
            "name": "Ömer Faruk Görmel",
            "username": "gormelof",
            "email:"gormelomerfaruk@gmail.com",
            "photo":"https://gravatar.com/avatar/3r3hhr32rjhr2h3jrhjfj2",
            "registered_at":"2018-01-01 23:59:59",
            "reputation":20
        },
    ]
}
* */
Router.get('/v1/users', User.getAll);


export default Router;