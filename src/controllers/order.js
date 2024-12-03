"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrdersCtrl = void 0;
const errros_handle_1 = __importDefault(require("../utils/errros.handle"));
const getOrdersCtrl = (req, res) => {
    try {
        res.send({
            data: "ESTO SOLO PUEDE VERLO LOS AUTENTICOS",
            user: req.user
        });
    }
    catch (error) {
        (0, errros_handle_1.default)(res, "ERROR_GET_BLOGS");
    }
};
exports.getOrdersCtrl = getOrdersCtrl;
