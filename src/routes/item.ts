import { Request, Response, Router } from "express";
import { deletedItem, getItem, getItems, postItem, updateItem } from "../controllers/item";

const router = Router()


router.get("/", getItems)

router.get("/test", (req: Request, res: Response) => {
    res.status(200)
    res.send("Test probado")
})

router.get("/:id", getItem)

router.post("/", postItem)

router.put("/:id", updateItem)

router.delete("/:id", deletedItem)

export { router }