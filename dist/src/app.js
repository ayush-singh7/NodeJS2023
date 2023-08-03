"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
var express_1 = __importDefault(require("express"));
var http_1 = require("http");
var serverLogger_1 = require("./utility/serverLogger");
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
var logger_1 = require("./middlewares/logger");
var connection_1 = require("./db/connection");
var api_routes_1 = require("./routes/api-routes");
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var redis_client_1 = require("./db/redis-client");
var Application = /** @class */ (function () {
    function Application() {
        this.instance = (0, express_1.default)();
        this.instance.set('port', 4999);
    }
    Object.defineProperty(Application.prototype, "port", {
        get: function () {
            return this.instance.get('port');
        },
        enumerable: false,
        configurable: true
    });
    Application.init = function () {
        var app = new Application();
        var server = new http_1.Server(app.instance);
        server.on('listening', function () {
            var addr = server.address();
            var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
            serverLogger_1.serverLogger.info('Listening on ' + bind);
        });
        app
            .load()
            .then(function () {
            server.listen(app.port, function () {
                serverLogger_1.serverLogger.info("Swagger URL \"/api-docs/swagger\"");
            });
        })
            .catch(function (error) {
            console.log(error);
            process.exit(1);
        });
    };
    Application.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.initConfig();
                        return [4 /*yield*/, (0, connection_1.connectDB)()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, (0, redis_client_1.redisConnect)()];
                    case 2:
                        _a.sent();
                        this.instance.use('/api', api_routes_1.apiRouter);
                        return [2 /*return*/];
                }
            });
        });
    };
    Application.prototype.initConfig = function () {
        //Api Middleware
        this.instance.use((0, cors_1.default)());
        this.instance.use(logger_1.loggerMiddleWare);
        // //Initialize swaggerc
        this.initSwagger();
        //Set well-known security-related HTTP headers
        this.instance.use((0, helmet_1.default)());
        this.instance.disable('x-powered-by');
        this.instance.use(express_1.default.json({ limit: '50mb' }));
        this.instance.use(express_1.default.urlencoded({ extended: true, limit: '50mb' }));
    };
    Application.prototype.initSwagger = function () {
        var SWAGGER_OPTIONS = {
            failOnErrors: true,
            definition: {
                openapi: '3.0.0',
                info: {
                    title: 'OLX Api',
                    version: '1.0.0',
                },
                components: {
                    securitySchemes: {
                        BasicAuth: {
                            type: 'http',
                            scheme: 'basic',
                        },
                        BearerAuth: {
                            type: 'http',
                            scheme: 'bearer',
                        },
                    },
                },
            },
            apis: ['./src/swagger/*'], // files containing annotations as above
        };
        var socialAppAPISpecs = (0, swagger_jsdoc_1.default)(SWAGGER_OPTIONS);
        this.instance.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(socialAppAPISpecs));
        /** Swagger Implementation Ends  */
    };
    return Application;
}());
exports.Application = Application;
