import { model, Schema } from "mongoose";
import { User } from "../interface/user.interface";




const UserSchema = new Schema<User>(
    {

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


    },
    {
        versionKey: false,
        timestamps: true
    }
)

const userModel = model('users', UserSchema);

export default userModel