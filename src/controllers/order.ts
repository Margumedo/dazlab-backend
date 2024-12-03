import { Request, Response } from "express"
import handleError from "../utils/errros.handle"
import { JwtPayload } from "jsonwebtoken";



interface RequestExt extends Request {
    user?: string | JwtPayload;
}


const getOrdersCtrl = (req: RequestExt, res: Response) => {

    try {
        res.send({
            data: "ESTO SOLO PUEDE VERLO LOS AUTENTICOS",
            user: req.user
        })
    } catch (error) {
        handleError(res, "ERROR_GET_BLOGS")
    }

}


export { getOrdersCtrl }