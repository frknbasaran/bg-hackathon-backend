import { Pack } from '../core';
import KoaRouter from 'koa-router';

const Router = new KoaRouter();

/*
* @api {get} /v1/packs Get All Packs
* @apiName getAllPacks
* @apiGroup Pack
* @apiVersion 1.0.0
*
* @queryParam: f {String} Starting point, city
* @queryParam: t {String} Ending point, city
* @queryParam: w {Number} Weight, lte
* @queryParam: u {ObjectId} User
* @queryParam: sk {String} Sort key
* @queryParam: sv {String} Sort val
*
* @apiSuccessExample {json} Success-Response:
*   HTTP/1.1 200
 {
    "success": true,
    "data": [
        {
            _id: "5a883f3775e4b725e03a7c3d",
            user: {
                _id: "5a883f3675e4b725e03a7b7d",
                photo: "https://gravatar.com/avatar/46fdf6c7bd5dea0905ff529b287e7f7c?s=200&d=retro",
                name: "Munificent Wheelwright",
                reputation: 0
            },
            weight: 10,
            to: "Mesa",
            from: "Irvine",
            __v: 0,
            created_at: "2018-02-17T14:41:58.637Z"
        },
        {
            _id: "5a883f3775e4b725e03a7c3d",
            user: {
                _id: "5a883f3675e4b725e03a7b7d",
                photo: "https://gravatar.com/avatar/46fdf6c7bd5dea0905ff529b287e7f7c?s=200&d=retro",
                name: "Munificent Wheelwright",
                reputation: 0
            },
            weight: 10,
            to: "Mesa",
            from: "Irvine",
            __v: 0,
            created_at: "2018-02-17T14:41:58.637Z"
        }
    ]
}
* */
Router.get('/v1/packs', Pack.getAll);
/*
* @api {get} /v1/packs/:id Get One Pack
* @apiName GetOnePack
* @apiGroup Pack
* @apiVersion 1.0.0
*
* @apiSuccessExample {json} Success-Response:
*   HTTP/1.1 200
 {
    "success": true,
    "data": [
        {
            _id: "5a883f3775e4b725e03a7c3d",
            user: {
                _id: "5a883f3675e4b725e03a7b7d",
                photo: "https://gravatar.com/avatar/46fdf6c7bd5dea0905ff529b287e7f7c?s=200&d=retro",
                name: "Munificent Wheelwright",
                reputation: 0
            },
            weight: 10,
            to: "Mesa",
            from: "Irvine",
            __v: 0,
            created_at: "2018-02-17T14:41:58.637Z"
        }
    ]
}
*/
Router.get('/v1/packs/:id', Pack.getOne);
/*
* @api {post} /v1/packs Create Packet
* @apiName CreatePacket
* @apiGroup Pack
* @apiVersion 1.0.0
*
* @apiParam: from {String} Starting point, city
* @apiParam: to {String} Ending point, city
* @apiParam: weight {Number} Weight
* @apiParam: user {ObjectId} User id
*
* */
Router.post('/v1/packs', Pack.create);

export default Router;