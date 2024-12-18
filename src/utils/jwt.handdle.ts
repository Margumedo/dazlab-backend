import { sign, verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || "token.dealt.01"


const generateToken = (id: string) => {
    const jwt = sign({ id }, JWT_SECRET, { expiresIn: "2h" });
    return jwt
};

const verifyToken = (jwt: string) => {

    const tokenCorrect = verify(jwt, JWT_SECRET);
    return tokenCorrect;
};


export { generateToken, verifyToken }