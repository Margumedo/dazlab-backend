"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: 'Agrega una descripcion'
    }
}, {
    versionKey: false,
    timestamps: true
});
const userModel = (0, mongoose_1.model)('users', UserSchema);
exports.default = userModel;
