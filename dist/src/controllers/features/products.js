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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveProduct = exports.ProductListing = exports.PlaceBid = exports.ViewProduct = exports.AddProduct = void 0;
var models_1 = require("../../db/models");
var sequelize_1 = require("sequelize");
var AddProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, tokenData, product_name, description, base_price, category_id, subcategory_id, address_id, productDetails, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, tokenData = _a.tokenData, product_name = _a.product_name, description = _a.description, base_price = _a.base_price, category_id = _a.category_id, subcategory_id = _a.subcategory_id, address_id = _a.address_id;
                return [4 /*yield*/, models_1.ProductModel.create({
                        user_id: tokenData.user_id,
                        product_name: product_name,
                        description: description,
                        base_price: base_price,
                        category_id: category_id,
                        address_id: address_id,
                        subcategory_id: subcategory_id
                    })];
            case 1:
                productDetails = _b.sent();
                res.send(productDetails);
                return [3 /*break*/, 3];
            case 2:
                e_1 = _b.sent();
                res.send(e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.AddProduct = AddProduct;
var ViewProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, productDetails, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, models_1.ProductModel.findOne({
                        where: {
                            product_id: id
                        }
                    })];
            case 1:
                productDetails = _a.sent();
                res.status(200).send(productDetails);
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                res.status(404).send("NOT FOUND");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.ViewProduct = ViewProduct;
var PlaceBid = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, bid_amount, product_id, tokenData, e_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, bid_amount = _a.bid_amount, product_id = _a.product_id, tokenData = _a.tokenData;
                return [4 /*yield*/, models_1.ProductModel.increment('current_price', {
                        by: bid_amount,
                        where: { product_id: product_id }
                    })];
            case 1:
                _b.sent();
                return [4 /*yield*/, models_1.ProductModel.update({
                        bidder_id: tokenData.user_id
                    }, {
                        where: { product_id: product_id }
                    })];
            case 2:
                _b.sent();
                res.status(200).send("UPDATION SUCCESFULL");
                return [3 /*break*/, 4];
            case 3:
                e_3 = _b.sent();
                res.status(400).send(e_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.PlaceBid = PlaceBid;
var ProductListing = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, category, subcategory, order, querryArray, orderArray, productListing, productListing, e_4;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 5, , 6]);
                _a = req.query, category = _a.category, subcategory = _a.subcategory, order = _a.order;
                querryArray = [];
                orderArray = [];
                if (category) {
                    querryArray.push({ category_id: category });
                }
                if (subcategory) {
                    querryArray.push({ subcategory_id: subcategory });
                }
                if (!order) return [3 /*break*/, 2];
                orderArray.push([order]);
                return [4 /*yield*/, models_1.ProductModel.findAll({
                        where: (_b = {},
                            _b[sequelize_1.Op.and] = querryArray,
                            _b),
                        order: orderArray
                    })];
            case 1:
                productListing = _d.sent();
                res.send(productListing);
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, models_1.ProductModel.findAll({
                    where: (_c = {},
                        _c[sequelize_1.Op.and] = querryArray,
                        _c),
                    order: orderArray
                })];
            case 3:
                productListing = _d.sent();
                res.send(productListing);
                _d.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                e_4 = _d.sent();
                res.send(e_4);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.ProductListing = ProductListing;
var RemoveProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, models_1.ProductModel.destroy({
                        where: { product_id: id }
                    })];
            case 1:
                _a.sent();
                res.send('succesfully deleted product');
                return [3 /*break*/, 3];
            case 2:
                e_5 = _a.sent();
                res.send('server ereror');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.RemoveProduct = RemoveProduct;
