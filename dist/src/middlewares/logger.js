"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMiddleWare = void 0;
var serverLogger_1 = require("../utility/serverLogger");
var loggerMiddleWare = function (req, res, next) {
    res.locals.startTime = Date.now();
    if (req.path === "/") {
        return next();
    }
    var startTime = Date.now();
    var serverLogger = (0, serverLogger_1.createNewLogger)("server");
    res.on("finish", function () {
        var time = Date.now() - startTime;
        var color = res.statusCode >= 500
            ? 31 // red
            : res.statusCode >= 400
                ? 33 // yellow
                : res.statusCode >= 300
                    ? 36 // cyan
                    : res.statusCode >= 200
                        ? 32 // green
                        : 0; // no color
        serverLogger.info("".concat(req.method, " ").concat(req.baseUrl + req.path, " \u001B[").concat(color, "m").concat(res.statusCode, "\u001B[0m - ").concat(time, " ms"), {
            data: {
                params: req.params || {},
                query: req.query || {},
                body: req.body || {},
                headers: req.headers,
            },
        });
    });
    next();
};
exports.loggerMiddleWare = loggerMiddleWare;
