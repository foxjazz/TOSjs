"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./home/index');
var index_2 = require('./todolist/index');
var index_3 = require('./simplebind/index');
var index_4 = require('./services/index');
var index_5 = require('./contact/index');
var routes = index_1.HomeRoutes.concat(index_2.TodolistRoutes, index_3.SimplebindRoutes, index_4.ServicesRoutes, index_5.ContactRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map