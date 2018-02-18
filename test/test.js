var assert = require('assert');
var request = require('request');
var mongoose = require('mongoose');

var root = "http://localhost";

describe('database', function () {
    it('connect to database successfully', function () {
        mongoose.createConnection("mongodb://127.0.0.1:27017/bg-hackathon-dev-db", (err) => {
            assert.equal(err, null);
        })
    })
})

describe('user_endpoints', function () {
    describe('GET /v1/users', function () {
        it('respond with an array of users', function () {
            request(root + '/v1/users', function (error, response, body) {
                body.length.should.be.above(0);
            });
        });
    });
    describe('GET /v1/users/:id', function () {
        it('not respond user without id', function () {
            request(root + '/v1/deals/', function (error, response, body) {
                body.data.length.should.be.equal(0);
            });
        });
    });
});

describe('request_endpoints', function () {
    describe('GET /v1/requests', function () {
        it('respond with an array of requests', function () {
            request(root + '/v1/requests', function (error, response, body) {
                body.length.should.be.above(0);
            });
        });
    });
    describe('GET /v1/requests/:id', function () {
        it('not respond request without id', function () {
            request(root + '/v1/requests/', function (error, response, body) {
                body.data.length.should.be.equal(0);
            });
        });
    });
    describe('POST /v1/requests', function () {
        it('create a request', function () {
            request(root + '/v1/requests', {
                "travel": "5a883350fee17958b1a210a0",
                "pack": "5a883350fee17958b1a210a0",
                "created_by": "5a883350fee17958b1a210a0"
            }, function (error, response, body) {
                body.data.success.should.be.equal(true);
            });
        });
    });
    describe('PUT /v1/requests', function () {
        it('update a request', function () {
            request(root + '/v1/requests', {"status": "APPROVED"}, function (error, response, body) {
                body.data.success.should.be.equal(true);
            })
        })
    })
})

describe('travel_endpoints', function () {
    describe('GET /v1/travels', function () {
        it('respond with an array of travels', function () {
            request(root + '/v1/travels', function (error, response, body) {
                body.length.should.be.above(0);
            });
        });
    });
    describe('GET /v1/travels/:id', function () {
        it('not respond request without id', function () {
            request(root + '/v1/travels/', function (error, response, body) {
                body.success.should.be.equal(true);
            });
        });
    });
});

describe('pack_endpoints', function () {
    describe('GET /v1/packs', function () {
        it('respond with an array of packs', function () {
            request(root + '/v1/packs', function (error, response, body) {
                body.length.should.be.above(0);
            });
        });
    });
    describe('GET /v1/packs/:id', function () {
        it('not respond pack without id', function () {
            request(root + '/v1/packs/', function (error, response, body) {
                body.success.should.be.equal(true);
            });
        });
    });
});