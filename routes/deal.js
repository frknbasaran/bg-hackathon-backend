import { Deal } from '../core';
import KoaRouter from 'koa-router';

const Router = new KoaRouter();

/**
* @api {get} /v1/deals Get All Deals
* @apiName GetAllDeals
* @apiGroup Deal
* @apiVersion 1.0.0
*
* @queryParam: t {ObjectId}
* @queryParam: p {ObjectId}
* @queryParam: s {Object}
*
* @apiSuccessExample {json} Success-Response:
*   HTTP/1.1 200
 {
    "success": true,
    "data": [
        {
            _id: "5a883f3875e4b725e03a7d05",
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
                _id: "5a883f3675e4b725e03a7bdb",
                user: "5a883f3675e4b725e03a7baa",
                weight: 16,
                to: "Davidson County",
                from: "Fort Worth",
                date: "2018-02-19T14:41:58.983Z",
                __v: 0,
                created_at: "2018-02-17T14:41:58.646Z"
            },
            __v: 0,
            status: "PENDING",
            created_at: "2018-02-17T14:41:58.640Z"
        },
        {
            _id: "5a883f3875e4b725e03a7d05",
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
                _id: "5a883f3675e4b725e03a7bdb",
                user: "5a883f3675e4b725e03a7baa",
                weight: 16,
                to: "Davidson County",
                from: "Fort Worth",
                date: "2018-02-19T14:41:58.983Z",
                __v: 0,
                created_at: "2018-02-17T14:41:58.646Z"
            },
            __v: 0,
            status: "PENDING",
            created_at: "2018-02-17T14:41:58.640Z"
        }
    ]
}
* */
Router.get('/v1/deals', Deal.getAll);
/**
* @api {get} /v1/deals/:id Get One Deal
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
            _id: "5a883f3875e4b725e03a7d05",
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
                _id: "5a883f3675e4b725e03a7bdb",
                user: "5a883f3675e4b725e03a7baa",
                weight: 16,
                to: "Davidson County",
                from: "Fort Worth",
                date: "2018-02-19T14:41:58.983Z",
                __v: 0,
                created_at: "2018-02-17T14:41:58.646Z"
            },
            __v: 0,
            status: "PENDING",
            created_at: "2018-02-17T14:41:58.640Z"
        },
    ]
}
*/
Router.get('/v1/deals/:id', Deal.getOne);
/**
* @api {post} /v1/deals    Create Deal
* @apiName CreateDeal
* @apiGroup Deal
* @apiVersion 1.0.0
*
* @bodyParam: travel {ObjectId}
* @bodyParam: pack {ObjectId}
*
* */
Router.post('/v1/deals', Deal.create);

export default Router;