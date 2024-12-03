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
exports.loginUser = exports.registerUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcrypt_handle_1 = require("../utils/bcrypt.handle");
const jwt_handdle_1 = require("../utils/jwt.handdle");
const registerUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name, password } = payload;
    const checkUser = yield user_1.default.findOne({ email: email });
    if (checkUser) {
        return { status: 409, message: "User already exist!!" };
    }
    const passHash = yield (0, bcrypt_handle_1.encrypt)(password);
    const newUser = yield user_1.default.create({ email, password: passHash, name });
    return { status: 201, user: newUser };
});
exports.registerUser = registerUser;
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const user = yield user_1.default.findOne({ email });
    if (!user) {
        return { status: 404, message: "CREDENTIALS_INCORRECT" };
    }
    const passHash = user.password;
    const test = yield (0, bcrypt_handle_1.verified)(password, passHash);
    if (!test)
        return { status: 404, message: "CREDENTIALS_INCORRECT" };
    const token = yield (0, jwt_handdle_1.generateToken)(user.id);
    const data = {
        token: token, user
    };
    return { status: 201, user: data };
});
exports.loginUser = loginUser;
