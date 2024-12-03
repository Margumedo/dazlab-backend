"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleError = (res, error, errorRaw) => {
    console.log(errorRaw);
    res.status(500);
    res.send({ error: error });
};
exports.default = handleError;
