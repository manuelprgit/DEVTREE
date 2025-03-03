import jwt, { JwtPayload } from 'jsonwebtoken';

export const generateJWT = (payload: JwtPayload) => {
    const token = jwt.sign(payload, process.env.SECRET_WORD, {
        expiresIn: '180d'
    })

    return token;
}