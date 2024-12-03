import { Router } from "express";
import { getOrdersCtrl } from "../controllers/order";
import { checkJWT } from "../middleware/session";



const router = Router();



router.get('/', checkJWT, getOrdersCtrl)


export { router }