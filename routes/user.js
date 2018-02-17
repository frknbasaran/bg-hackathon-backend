import { User } from '../core';
import KoaRouter from 'koa-router';

const Router = new KoaRouter();

/*
* @api {get} /users Get All Users
* @apiName GetAllUsers
* @apiGroup User
* @apiVersion 1.0.0
*
* @queryParam u {String} Username
*
* @apiSuccessExample {json} Success-Response:
*   HTTP/1.1 200
 {
    "success": true,
    "data": [
        {
            _id: "5a883f3675e4b725e03a7b75",
            photo: "https://gravatar.com/avatar/6fafc037ec21b78652cae827e7c4eb06?s=200&d=retro",
            email: "luminous_glitter@getir.com",
            username: "luminous_glitter",
            name: "Luminous Glitter",
            __v: 0,
            reputation: 0,
            registered_at: "2018-02-17T14:41:58.631Z"
        },
        {
            _id: "5a883f3675e4b725e03a7b76",
            photo: "https://gravatar.com/avatar/0fef7157a32d98a85509a7602571001a?s=200&d=retro",
            email: "jejune_patternmaker@bitaksi.com",
            username: "jejune_patternmaker",
            name: "Jejune Patternmaker",
            __v: 0,
            reputation: 0,
            registered_at: "2018-02-17T14:41:58.631Z"
        }
    ]
}
* */
Router.get('/v1/users', User.getAll);
/*
* @api {get} /v1/users/:id Get One User
* @apiName GetOneUser
* @apiGroup User
* @apiVersion 1.0.0
*
* @queryParam u {String} Username
*
* @apiSuccessExample {json} Success-Response:
*   HTTP/1.1 200
 {
    "success": true,
    "data": [
        {
            _id: "5a883f3675e4b725e03a7b75",
            photo: "https://gravatar.com/avatar/6fafc037ec21b78652cae827e7c4eb06?s=200&d=retro",
            email: "luminous_glitter@getir.com",
            username: "luminous_glitter",
            name: "Luminous Glitter",
            __v: 0,
            reputation: 0,
            registered_at: "2018-02-17T14:41:58.631Z"
        }
    ]
}
* */
Router.get('/v1/users/:id', User.getOne);


export default Router;