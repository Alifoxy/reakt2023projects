"use strict";
exports.__esModule = true;
exports.launchService = void 0;
var apiService_1 = require("./apiService");
var launchService = {
    getAll: function () { return apiService_1.apiService.get('/launches'); }
};
exports.launchService = launchService;
