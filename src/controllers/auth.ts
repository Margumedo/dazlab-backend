import { Request, Response } from "express";
import { loginUser, registerUser } from "../services/auth.service";




const registerCtrl = async (req: Request, res: Response) => {

    try {
        const body = req.body
        const responseUser = await registerUser(body);


        if (responseUser.status === 409) {
            res.status(409).send(responseUser.message)

        } else {
            res.status(201).send(responseUser.user)
        }


    } catch (error) {
        res.status(500)
        res.send("INTERNAL_SERVER_ERROR")
    }
}

const loginCtrl = async (req: Request, res: Response) => {
    try {
        const body = req.body
        const responseUser = await loginUser(body);

        if (responseUser.status === 404) {
            res.status(404).send(responseUser.message)

        } else {
            res.status(201).send(responseUser.user)
        }

    } catch (error) {
        res.status(500)
        res.send("INTERNAL_SERVER_ERROR")
    }
}


export { registerCtrl, loginCtrl }