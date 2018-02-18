define({ "api": [  {    "type": "post",    "url": "/v1/deals",    "title": "Create Deal",    "name": "CreateDeal",    "group": "Deal",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "optional": false,            "field": "travel",            "description": "<p>ObjectId</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "pack",            "description": "<p>ObjectId</p>"          }        ]      }    },    "filename": "routes/deal.js",    "groupTitle": "Deal"  },  {    "type": "get",    "url": "/v1/deals",    "title": "Get All Deals",    "name": "GetAllDeals",    "group": "Deal",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "optional": false,            "field": "t",            "description": "<p>ObjectId</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "p",            "description": "<p>ObjectId</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "sk",            "description": "<p>String, sorting key, ie: created_at</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "sv",            "description": "<p>String, sorting type: ie: -1 for desc, 1 for asc</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "sf",            "description": "<p>String, sent_from, user id which sent request</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "st",            "description": "<p>String, sent_to, user id which sent request to</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "  HTTP/1.1 200\n {\n    \"success\": true,\n    \"data\": [\n        {\n            _id: \"5a883f3875e4b725e03a7d05\",\n            pack: {\n                _id: \"5a883f3775e4b725e03a7c3e\",\n                user: \"5a883f3675e4b725e03a7baf\",\n                weight: 46,\n                to: \"Havre de Grace\",\n                from: \"Bethlehem\",\n                __v: 0,\n                created_at: \"2018-02-17T14:41:58.637Z\"\n            },\n            travel: {\n                _id: \"5a883f3675e4b725e03a7bdb\",\n                user: \"5a883f3675e4b725e03a7baa\",\n                weight: 16,\n                to: \"Davidson County\",\n                from: \"Fort Worth\",\n                date: \"2018-02-19T14:41:58.983Z\",\n                __v: 0,\n                created_at: \"2018-02-17T14:41:58.646Z\"\n            },\n            __v: 0,\n            status: \"PENDING\",\n            created_at: \"2018-02-17T14:41:58.640Z\"\n        },\n        {\n            _id: \"5a883f3875e4b725e03a7d05\",\n            pack: {\n                _id: \"5a883f3775e4b725e03a7c3e\",\n                user: \"5a883f3675e4b725e03a7baf\",\n                weight: 46,\n                to: \"Havre de Grace\",\n                from: \"Bethlehem\",\n                __v: 0,\n                created_at: \"2018-02-17T14:41:58.637Z\"\n            },\n            travel: {\n                _id: \"5a883f3675e4b725e03a7bdb\",\n                user: \"5a883f3675e4b725e03a7baa\",\n                weight: 16,\n                to: \"Davidson County\",\n                from: \"Fort Worth\",\n                date: \"2018-02-19T14:41:58.983Z\",\n                __v: 0,\n                created_at: \"2018-02-17T14:41:58.646Z\"\n            },\n            __v: 0,\n            status: \"PENDING\",\n            created_at: \"2018-02-17T14:41:58.640Z\"\n        }\n    ]\n}",          "type": "json"        }      ]    },    "filename": "routes/deal.js",    "groupTitle": "Deal"  },  {    "type": "get",    "url": "/v1/deals/:id",    "title": "Get One Deal",    "name": "GetOneDeal",    "group": "Deal",    "version": "1.0.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "  HTTP/1.1 200\n {\n    \"success\": true,\n    \"data\": [\n        {\n            _id: \"5a883f3875e4b725e03a7d05\",\n            pack: {\n                _id: \"5a883f3775e4b725e03a7c3e\",\n                user: \"5a883f3675e4b725e03a7baf\",\n                weight: 46,\n                to: \"Havre de Grace\",\n                from: \"Bethlehem\",\n                __v: 0,\n                created_at: \"2018-02-17T14:41:58.637Z\"\n            },\n            travel: {\n                _id: \"5a883f3675e4b725e03a7bdb\",\n                user: \"5a883f3675e4b725e03a7baa\",\n                weight: 16,\n                to: \"Davidson County\",\n                from: \"Fort Worth\",\n                date: \"2018-02-19T14:41:58.983Z\",\n                __v: 0,\n                created_at: \"2018-02-17T14:41:58.646Z\"\n            },\n            __v: 0,\n            status: \"PENDING\",\n            created_at: \"2018-02-17T14:41:58.640Z\"\n        },\n    ]\n}",          "type": "json"        }      ]    },    "filename": "routes/deal.js",    "groupTitle": "Deal"  },  {    "type": "post",    "url": "/v1/packs",    "title": "Create Packet",    "name": "CreatePacket",    "group": "Pack",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "optional": false,            "field": "from",            "description": "<p>String, Starting point, city</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "to",            "description": "<p>String, Ending point, city</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "weight",            "description": "<p>Number, Weight</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "user",            "description": "<p>ObjectId, User id</p>"          }        ]      }    },    "filename": "routes/pack.js",    "groupTitle": "Pack"  },  {    "type": "get",    "url": "/v1/packs/:id",    "title": "Get One Pack",    "name": "GetOnePack",    "group": "Pack",    "version": "1.0.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "  HTTP/1.1 200\n {\n    \"success\": true,\n    \"data\": [\n        {\n            _id: \"5a883f3775e4b725e03a7c3d\",\n            user: {\n                _id: \"5a883f3675e4b725e03a7b7d\",\n                photo: \"https://gravatar.com/avatar/46fdf6c7bd5dea0905ff529b287e7f7c?s=200&d=retro\",\n                name: \"Munificent Wheelwright\",\n                reputation: 0\n            },\n            weight: 10,\n            to: \"Mesa\",\n            from: \"Irvine\",\n            __v: 0,\n            created_at: \"2018-02-17T14:41:58.637Z\"\n        }\n    ]\n}",          "type": "json"        }      ]    },    "filename": "routes/pack.js",    "groupTitle": "Pack"  },  {    "type": "get",    "url": "/v1/packs",    "title": "Get All Packs",    "name": "getAllPacks",    "group": "Pack",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "optional": false,            "field": "f",            "description": "<p>{String} Starting point, city</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "t",            "description": "<p>{String} Ending point, city</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "w",            "description": "<p>{Number} Weight, lte</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "u",            "description": "<p>{ObjectId} User</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "sk",            "description": "<p>{String} Sort key</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "sv",            "description": "<p>{String} Sort val</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "  HTTP/1.1 200\n {\n    \"success\": true,\n    \"data\": [\n        {\n            _id: \"5a883f3775e4b725e03a7c3d\",\n            user: {\n                _id: \"5a883f3675e4b725e03a7b7d\",\n                photo: \"https://gravatar.com/avatar/46fdf6c7bd5dea0905ff529b287e7f7c?s=200&d=retro\",\n                name: \"Munificent Wheelwright\",\n                reputation: 0\n            },\n            weight: 10,\n            to: \"Mesa\",\n            from: \"Irvine\",\n            __v: 0,\n            created_at: \"2018-02-17T14:41:58.637Z\"\n        },\n        {\n            _id: \"5a883f3775e4b725e03a7c3d\",\n            user: {\n                _id: \"5a883f3675e4b725e03a7b7d\",\n                photo: \"https://gravatar.com/avatar/46fdf6c7bd5dea0905ff529b287e7f7c?s=200&d=retro\",\n                name: \"Munificent Wheelwright\",\n                reputation: 0\n            },\n            weight: 10,\n            to: \"Mesa\",\n            from: \"Irvine\",\n            __v: 0,\n            created_at: \"2018-02-17T14:41:58.637Z\"\n        }\n    ]\n}",          "type": "json"        }      ]    },    "filename": "routes/pack.js",    "groupTitle": "Pack"  },  {    "type": "post",    "url": "/v1/requests",    "title": "Create Request",    "name": "CreateRequest",    "group": "Request",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "optional": false,            "field": "travel",            "description": "<p>ObjectId</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "pack",            "description": "<p>ObjectId</p>"          }        ]      }    },    "filename": "routes/request.js",    "groupTitle": "Request"  },  {    "type": "get",    "url": "/v1/requests",    "title": "Get All Requests",    "name": "GetAllRequests",    "group": "Request",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "optional": false,            "field": "t",            "description": "<p>ObjectId Travel id</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "p",            "description": "<p>ObjectId Pack id</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "sf",            "description": "<p>String, sent_from, user id which sent request</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "st",            "description": "<p>String, sent_to, user id which sent request to</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "  HTTP/1.1 200\n {\n    \"success\": true,\n    \"data\": [\n        {\n            _id: \"5a883f3775e4b725e03a7ca1\",\n            pack: {\n                _id: \"5a883f3775e4b725e03a7c3e\",\n                user: \"5a883f3675e4b725e03a7baf\",\n                weight: 46,\n                to: \"Havre de Grace\",\n                from: \"Bethlehem\",\n                __v: 0,\n                created_at: \"2018-02-17T14:41:58.637Z\"\n            },\n            travel: {\n                _id: \"5a883f3775e4b725e03a7c25\",\n                user: \"5a883f3675e4b725e03a7b90\",\n                weight: 19,\n                to: \"Salt Lake City\",\n                from: \"Joliet\",\n                date: \"2018-05-04T14:41:59.374Z\",\n                __v: 0,\n                created_at: \"2018-02-17T14:41:58.646Z\"\n            },\n            __v: 0,\n            status: \"PENDING\",\n            created_at: \"2018-02-17T14:41:58.650Z\"\n        },\n    ]\n}",          "type": "json"        }      ]    },    "filename": "routes/request.js",    "groupTitle": "Request"  },  {    "type": "get",    "url": "/v1/requests/:id",    "title": "Get One Request",    "name": "GetOneRequest",    "group": "Request",    "version": "1.0.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "  HTTP/1.1 200\n {\n    \"success\": true,\n    \"data\": [\n        {\n            \"_id\": \"59ac71d2bd20270bff10f175\",\n            \"travel\": {\n                \"from\":\"Moskova\",\n                \"to\":\"Paris\",\n                \"weight\":10,\n                \"user\":{\n                    \"name\":\"Furkan Başaran\",\n                    \"username\":\"frknbasaran\"\n                }\n            },\n            \"pack\": {\n                \"from\":\"Moskova\",\n                \"to\":\"Paris\",\n                \"weight\":10,\n                \"user\":{\n                    \"name\":\"Ömer Kantar\",\n                    \"username\":\"omerkantar\"\n                }\n            },\n            \"status\":{\n                \"name\":\"PENDING\"\n            }\n        }\n    ]\n}",          "type": "json"        }      ]    },    "filename": "routes/request.js",    "groupTitle": "Request"  },  {    "type": "put",    "url": "/v1/requests/:id",    "title": "Update Request",    "name": "UpdateRequest",    "group": "Request",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "optional": false,            "field": "_id",            "description": "<p>ObjectId</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "status",            "description": "<p>String</p>"          }        ]      }    },    "filename": "routes/request.js",    "groupTitle": "Request"  },  {    "type": "post",    "url": "/travels",    "title": "Create Travel",    "name": "CreateTravel",    "group": "Travel",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "optional": false,            "field": "from",            "description": "<p>String</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "to",            "description": "<p>String</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "weight",            "description": "<p>Number</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "user",            "description": "<p>ObjectId</p>"          }        ]      }    },    "filename": "routes/travel.js",    "groupTitle": "Travel"  },  {    "type": "get",    "url": "/v1/travels",    "title": "Get All Travels",    "name": "GetAllTravels",    "group": "Travel",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "optional": false,            "field": "f",            "description": "<p>String, Starting point, city</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "t",            "description": "<p>String, Ending point, city</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "w",            "description": "<p>Number, Weight, gte</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "y",            "description": "<p>ObjectId, User id</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "sd",            "description": "<p>Date, Start date of range</p>"          },          {            "group": "Parameter",            "optional": false,            "field": "ed",            "description": "<p>Date, End date of range</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "  HTTP/1.1 200\n {\n    \"success\": true,\n    \"data\": [\n        {\n            _id: \"5a883f3675e4b725e03a7bd9\",\n            user: {\n                _id: \"5a883f3675e4b725e03a7b94\",\n                photo: \"https://gravatar.com/avatar/853b1b9c545422eb52721d983eb77ee6?s=200&d=retro\",\n                name: \"Dilatory Leadman\",\n                reputation: 0\n            },\n            weight: 47,\n            to: \"Stamford\",\n            from: \"Fort Lauderdale\",\n            date: \"2018-02-17T14:41:58.968Z\",\n            __v: 0,\n            created_at: \"2018-02-17T14:41:58.646Z\"\n        },\n        {\n            _id: \"5a883f3675e4b725e03a7bd9\",\n            user: {\n                _id: \"5a883f3675e4b725e03a7b94\",\n                photo: \"https://gravatar.com/avatar/853b1b9c545422eb52721d983eb77ee6?s=200&d=retro\",\n                name: \"Dilatory Leadman\",\n                reputation: 0\n            },\n            weight: 47,\n            to: \"Stamford\",\n            from: \"Fort Lauderdale\",\n            date: \"2018-02-17T14:41:58.968Z\",\n            __v: 0,\n            created_at: \"2018-02-17T14:41:58.646Z\"\n        }\n    ]\n}",          "type": "json"        }      ]    },    "filename": "routes/travel.js",    "groupTitle": "Travel"  },  {    "type": "get",    "url": "/v1/travels/:id",    "title": "Get One Travel",    "name": "GetOneTravel",    "group": "Travel",    "version": "1.0.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "  HTTP/1.1 200\n {\n    \"success\": true,\n    \"data\": [\n        {\n            _id: \"5a883f3675e4b725e03a7bd9\",\n            user: {\n                _id: \"5a883f3675e4b725e03a7b94\",\n                photo: \"https://gravatar.com/avatar/853b1b9c545422eb52721d983eb77ee6?s=200&d=retro\",\n                name: \"Dilatory Leadman\",\n                reputation: 0\n            },\n            weight: 47,\n            to: \"Stamford\",\n            from: \"Fort Lauderdale\",\n            date: \"2018-02-17T14:41:58.968Z\",\n            __v: 0,\n            created_at: \"2018-02-17T14:41:58.646Z\"\n        }\n    ]\n}",          "type": "json"        }      ]    },    "filename": "routes/travel.js",    "groupTitle": "Travel"  },  {    "type": "get",    "url": "/users",    "title": "Get All Users",    "name": "GetAllUsers",    "group": "User",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "optional": false,            "field": "u",            "description": "<p>String, Username</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "  HTTP/1.1 200\n {\n    \"success\": true,\n    \"data\": [\n        {\n            _id: \"5a883f3675e4b725e03a7b75\",\n            photo: \"https://gravatar.com/avatar/6fafc037ec21b78652cae827e7c4eb06?s=200&d=retro\",\n            email: \"luminous_glitter@getir.com\",\n            username: \"luminous_glitter\",\n            name: \"Luminous Glitter\",\n            __v: 0,\n            reputation: 0,\n            registered_at: \"2018-02-17T14:41:58.631Z\"\n        },\n        {\n            _id: \"5a883f3675e4b725e03a7b76\",\n            photo: \"https://gravatar.com/avatar/0fef7157a32d98a85509a7602571001a?s=200&d=retro\",\n            email: \"jejune_patternmaker@bitaksi.com\",\n            username: \"jejune_patternmaker\",\n            name: \"Jejune Patternmaker\",\n            __v: 0,\n            reputation: 0,\n            registered_at: \"2018-02-17T14:41:58.631Z\"\n        }\n    ]\n}",          "type": "json"        }      ]    },    "filename": "routes/user.js",    "groupTitle": "User"  },  {    "type": "get",    "url": "/v1/users/:id",    "title": "Get One User",    "name": "GetOneUser",    "group": "User",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "optional": false,            "field": "u",            "description": "<p>String, Username</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "  HTTP/1.1 200\n {\n    \"success\": true,\n    \"data\": [\n        {\n            _id: \"5a883f3675e4b725e03a7b75\",\n            photo: \"https://gravatar.com/avatar/6fafc037ec21b78652cae827e7c4eb06?s=200&d=retro\",\n            email: \"luminous_glitter@getir.com\",\n            username: \"luminous_glitter\",\n            name: \"Luminous Glitter\",\n            __v: 0,\n            reputation: 0,\n            registered_at: \"2018-02-17T14:41:58.631Z\"\n        }\n    ]\n}",          "type": "json"        }      ]    },    "filename": "routes/user.js",    "groupTitle": "User"  }] });
