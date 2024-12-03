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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginCtrl = exports.registerCtrl = void 0;
const auth_service_1 = require("../services/auth.service");
const registerCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const responseUser = yield (0, auth_service_1.registerUser)(body);
        if (responseUser.status === 409) {
            res.status(409).send(responseUser.message);
        }
        else {
            res.status(201).send(responseUser.user);
        }
    }
    catch (error) {
        res.status(500);
        res.send("INTERNAL_SERVER_ERROR");
    }
});
exports.registerCtrl = registerCtrl;
const loginCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const responseUser = yield (0, auth_service_1.loginUser)(body);
        if (responseUser.status === 404) {
            res.status(404).send(responseUser.message);
        }
        else {
            res.status(201).send(responseUser.user);
        }
    }
    catch (error) {
        res.status(500);
        res.send("INTERNAL_SERVER_ERROR");
    }
});
exports.loginCtrl = loginCtrl;
