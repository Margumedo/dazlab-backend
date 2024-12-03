import { NextFunction, Request, Response } from "express"

import { verifyToken } from "../utils/jwt.handdle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
    user?: string | JwtPayload;
}


const checkJWT = (req: RequestExt, res: Response, next: NextFunction) => {

    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();

        if (!jwt) {
            res.status(401).send("JWT_NOT_FOUND");
        }
        const jwtUser = verifyToken(`${jwt}`);
        if (!jwtUser) {
            res.status(401).send("JWT_NOT_CORRECT")
        } else {
            console.log({ jwtByUser })
            req.user = jwtUser;
            next();
        }



    } catch (error) {
        console.log(error)
        res.status(400)
        res.send("SESSION_ERROR")
    }
}

export { checkJWT }