"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBuffer = exports.Multer = void 0;
var multer_1 = __importDefault(require("multer"));
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads'); // destination path like uploads/files/profiles/
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
        //   cb(null, Date.now() + '-' + file.originalname)
    }
});
exports.Multer = (0, multer_1.default)({ storage: storage });
var storageBuffer = multer_1.default.memoryStorage();
exports.getBuffer = (0, multer_1.default)({ storage: storageBuffer });
