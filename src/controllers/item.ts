import { Request, Response } from "express"
import handleError from "../utils/errros.handle"
import { getCar, getCars, insertCar, updateCar, deleteCar } from "../services/item.service"



const getItem = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        console.log(id)
        const response = await getCar(id)
        res.send(response)
    } catch (error) {
        handleError(res, 'ERROR_GET_ITEM')
    }
}

const getItems = async (req: Request, res: Response) => {

    try {
        const response = await getCars()
        res.send(response)

    } catch (error) {
        handleError(res, 'ERROR_GET_ITEMS')
    }
}


const postItem = async (req: Request, res: Response) => {

    try {
        const body = req.body;
        console.log(body)

        const createItem = await insertCar(body);

        res.send(createItem);

    } catch (error) {
        handleError(res, 'ERROR_CREATE_ITEM', error)
    }
}

const updateItem = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const payload = req.body;

        const response = await updateCar(id, payload);
        res.send(response)

    } catch (error) {
        handleError(res, 'ERROR_UPDATED_ITEM')
    }
}


const deletedItem = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const response = await deleteCar(id);
        res.send(response)
    } catch (error) {
        handleError(res, 'ERROR_DELETED_ITEM')
    }
}



export { getItem, getItems, postItem, updateItem, deletedItem }
