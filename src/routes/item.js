"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const item_1 = require("../controllers/item");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", item_1.getItems);
router.get("/test", (req, res) => {
    res.status(200);
    res.send("Test probado");
});
router.get("/:id", item_1.getItem);
router.post("/", item_1.postItem);
router.put("/:id", item_1.updateItem);
router.delete("/:id", item_1.deletedItem);
