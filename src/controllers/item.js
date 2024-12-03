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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletedItem = exports.updateItem = exports.postItem = exports.getItems = exports.getItem = void 0;
const errros_handle_1 = __importDefault(require("../utils/errros.handle"));
const item_service_1 = require("../services/item.service");
const getItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        console.log(id);
        const response = yield (0, item_service_1.getCar)(id);
        res.send(response);
    }
    catch (error) {
        (0, errros_handle_1.default)(res, 'ERROR_GET_ITEM');
    }
});
exports.getItem = getItem;
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, item_service_1.getCars)();
        res.send(response);
    }
    catch (error) {
        (0, errros_handle_1.default)(res, 'ERROR_GET_ITEMS');
    }
});
exports.getItems = getItems;
const postItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        console.log(body);
        const createItem = yield (0, item_service_1.insertCar)(body);
        res.send(createItem);
    }
    catch (error) {
        (0, errros_handle_1.default)(res, 'ERROR_CREATE_ITEM', error);
    }
});
exports.postItem = postItem;
const updateItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const payload = req.body;
        const response = yield (0, item_service_1.updateCar)(id, payload);
        res.send(response);
    }
    catch (error) {
        (0, errros_handle_1.default)(res, 'ERROR_UPDATED_ITEM');
    }
});
exports.updateItem = updateItem;
const deletedItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const response = yield (0, item_service_1.deleteCar)(id);
        res.send(response);
    }
    catch (error) {
        (0, errros_handle_1.default)(res, 'ERROR_DELETED_ITEM');
    }
});
exports.deletedItem = deletedItem;
