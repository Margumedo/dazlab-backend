"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJWT = void 0;
const jwt_handdle_1 = require("../utils/jwt.handdle");
const checkJWT = (req, res, next) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        if (!jwt) {
            res.status(401).send("JWT_NOT_FOUND");
        }
        const jwtUser = (0, jwt_handdle_1.verifyToken)(`${jwt}`);
        if (!jwtUser) {
            res.status(401).send("JWT_NOT_CORRECT");
        }
        else {
            console.log({ jwtByUser });
            req.user = jwtUser;
            next();
        }
    }
    catch (error) {
        console.log(error);
        res.status(400);
        res.send("SESSION_ERROR");
    }
};
exports.checkJWT = checkJWT;
