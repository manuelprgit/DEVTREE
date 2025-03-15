import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { IUser, User } from "../models/User";

declare global {
    namespace Express {
        interface Request {
            user?: IUser
        }
    }
}

export const authenticated = async (req: Request, res: Response, next: NextFunction) => {

    const bearer = req.headers.authorization;

    if (!bearer) {
        res.status(401).json({
            status: 401,
            message: 'No autorizado'
        })
        return;
    }

    const [, token] = bearer.split(' ');

    if (!token) {
        res.status(401).json({
            status: 401,
            message: 'No autorizado'
        })
        return;
    }

    try {
        const result = jwt.verify(token, process.env.SECRET_WORD)
        if (typeof result === 'object' && result.id) {
            const user = await User.findById(result.id).select('-password');
            if (!user) {
                res.status(404).json({
                    status: 404,
                    message: 'Usuario no existe'
                })
                return;
            }
            req.user = user;
            next()
        }

    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Token no valido'
        })
        return;
    }
}