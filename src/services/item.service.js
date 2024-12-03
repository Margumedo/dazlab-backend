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
exports.deleteCar = exports.updateCar = exports.getCar = exports.getCars = exports.insertCar = void 0;
const items_1 = __importDefault(require("../models/items"));
const insertCar = (item) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield items_1.default.create(item);
    return response;
});
exports.insertCar = insertCar;
const getCars = () => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield items_1.default.find({});
    return items;
});
exports.getCars = getCars;
const getCar = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield items_1.default.findById({ _id: id });
    return item;
});
exports.getCar = getCar;
const updateCar = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield items_1.default.findOneAndUpdate({ _id: id }, payload, { new: true });
    return item;
});
exports.updateCar = updateCar;
const deleteCar = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield items_1.default.deleteOne({ _id: id });
    return item;
});
exports.deleteCar = deleteCar;
