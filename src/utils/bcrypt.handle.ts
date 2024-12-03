import { hash, compare } from "bcryptjs"

const salt = parseInt(<string>process.env.SALT)

const encrypt = async (pass: string) => {
    const passwordHash = await hash(pass, salt)
    return passwordHash
}



const verified = async (pass: string, passHash: string) => {
    const isCorrect = await compare(pass, passHash);
    return isCorrect;

}


export { encrypt, verified }