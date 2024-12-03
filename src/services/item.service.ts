import { Car } from "../interface/car.interface";
import itemModel from "../models/items";
import handleError from "../utils/errros.handle";



const insertCar = async (item: Car) => {

    const response = await itemModel.create(item);
    return response;
}

const getCars = async () => {

    const items = await itemModel.find({})
    return items
}

const getCar = async (id: string) => {

    const item = await itemModel.findById({ _id: id })
    return item
}


const updateCar = async (id: string, payload: Car) => {

    const item = await itemModel.findOneAndUpdate(
        { _id: id },
        payload,
        { new: true })
    return item
}


const deleteCar = async (id: string) => {

    const item = await itemModel.deleteOne({ _id: id })
    return item;
}

export { insertCar, getCars, getCar, updateCar, deleteCar };