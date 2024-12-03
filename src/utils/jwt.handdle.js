"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "token.dealt.01";
const generateToken = (id) => {
    const jwt = (0, jsonwebtoken_1.sign)({ id }, JWT_SECRET, { expiresIn: "2h" });
    return jwt;
};
exports.generateToken = generateToken;
const verifyToken = (jwt) => {
    const tokenCorrect = (0, jsonwebtoken_1.verify)(jwt, JWT_SECRET);
    return tokenCorrect;
};
exports.verifyToken = verifyToken;
