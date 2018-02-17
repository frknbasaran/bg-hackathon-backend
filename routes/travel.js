import {Travel} from '../core';
import KoaRouter from 'koa-router';

const Router = new KoaRouter();

/*
* @api {get} /v1/travels Get All Travels
* @apiName GetAllTravels
* @apiGroup Travel
* @apiVersion 1.0.0
*
* @queryParam f {String} Starting point, city
* @queryParam t {String} Ending point, city
* @queryParam w {Number} Weight, gte
* @queryParam y {ObjectId} User id
* @queryParam sd {Date} Start date of range
* @queryParam ed {Date} End date of range
*
* @apiSuccessExample {json} Success-Response:
*   HTTP/1.1 200
 {
    "success": true,
    "data": [
        {
            _id: "5a883f3675e4b725e03a7bd9",
            user: {
                _id: "5a883f3675e4b725e03a7b94",
                photo: "https://gravatar.com/avatar/853b1b9c545422eb52721d983eb77ee6?s=200&d=retro",
                name: "Dilatory Leadman",
                reputation: 0
            },
            weight: 47,
            to: "Stamford",
            from: "Fort Lauderdale",
            date: "2018-02-17T14:41:58.968Z",
            __v: 0,
            created_at: "2018-02-17T14:41:58.646Z"
        },
        {
            _id: "5a883f3675e4b725e03a7bd9",
            user: {
                _id: "5a883f3675e4b725e03a7b94",
                photo: "https://gravatar.com/avatar/853b1b9c545422eb52721d983eb77ee6?s=200&d=retro",
                name: "Dilatory Leadman",
                reputation: 0
            },
            weight: 47,
            to: "Stamford",
            from: "Fort Lauderdale",
            date: "2018-02-17T14:41:58.968Z",
            __v: 0,
            created_at: "2018-02-17T14:41:58.646Z"
        }
    ]
}
* */
Router.get('/v1/travels', Travel.getAll);
/*
* @api {get} /v1/travels/:id Get One Travel
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
            _id: "5a883f3675e4b725e03a7bd9",
            user: {
                _id: "5a883f3675e4b725e03a7b94",
                photo: "https://gravatar.com/avatar/853b1b9c545422eb52721d983eb77ee6?s=200&d=retro",
                name: "Dilatory Leadman",
                reputation: 0
            },
            weight: 47,
            to: "Stamford",
            from: "Fort Lauderdale",
            date: "2018-02-17T14:41:58.968Z",
            __v: 0,
            created_at: "2018-02-17T14:41:58.646Z"
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