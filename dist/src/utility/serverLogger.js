"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverLogger = exports.createNewLogger = void 0;
var json_colorizer_1 = __importDefault(require("json-colorizer"));
var winston_1 = require("winston");
var createNewLogger = function (mod, filename) {
    return (0, winston_1.createLogger)({
        levels: winston_1.config.syslog.levels,
        defaultMeta: { module: mod },
        transports: [
            new winston_1.transports.Console({
                format: winston_1.format.combine(winston_1.format.timestamp({
                    format: 'YY-MM-DD HH:MM:SS'
                }), winston_1.format.colorize({
                    all: true
                }), winston_1.format.printf(function (info) {
                    var data = info.data ? '\n' + (0, json_colorizer_1.default)(JSON.stringify(info.data, null, 2)) : '';
                    return "".concat(info.timestamp, " [").concat(mod.toUpperCase(), "] ").concat(info.message).concat(data);
                }))
            }),
            new winston_1.transports.File({
                filename: filename || 'combined.log',
                dirname: 'logs'
            })
        ]
    });
};
exports.createNewLogger = createNewLogger;
exports.serverLogger = (0, exports.createNewLogger)('Server');
