
import { Auth } from "../interface/auth.interface";
import { User } from "../interface/user.interface";
import userModel from "../models/user"
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handdle";






const registerUser = async (payload: User) => {
    const { email, name, password } = payload;
    const checkUser = await userModel.findOne({ email: email });

    if (checkUser) {
        return { status: 409, message: "User already exist!!" }
    }

    const passHash = await encrypt(password);

    const newUser = await userModel.create({ email, password: passHash, name })

    return { status: 201, user: newUser }
};


const loginUser = async (payload: Auth) => {

    const { email, password } = payload;

    const user = await userModel.findOne({ email })

    if (!user) {
        return { status: 404, message: "CREDENTIALS_INCORRECT" };
    }

    const passHash = user.password

    const test = await verified(password, passHash)

    if (!test)
        return { status: 404, message: "CREDENTIALS_INCORRECT" };

    const token = await generateToken(user.id)
    const data = {
        token: token, user
    }
    return { status: 201, user: data }

}


export { registerUser, loginUser }