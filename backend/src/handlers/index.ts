
import { Response, Request } from "express";
import slug from "slug";
import jwt from 'jsonwebtoken';
import { User } from "../models/User";
import { comparePassword, hashPassword } from "../utils/Auth";
import { generateJWT } from "../utils/jwt";

export const getUser = async (req: Request, res: Response) => {

    const { user } = req
    res.status(200).json(user)

}

export const updateProfileUser = async (req: Request, res: Response) => {

    try {
        const { description } = req.body;

        const handle = slug(req.body.handle);
        const handleExists = await User.findOne({ handle });
        if (handleExists && handleExists.email !== req.user.email) {
            res.status(409).json({
                status: 409,
                message: 'Nombre de usuario no disponible'
            })
            return;
        }

        req.user.handle = handle;
        req.user.description = description;
        console.log('entre');
        req.user.save();

    } catch (error) {
        res.status(400).json({
            status: 400,
            message: 'Error al intentar actualizar el perfil'
        })
    }

}

export const createAccount = async (req: Request, res: Response) => {

    const { handle, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (!!userExists) {
        res.status(409).json({ status: 409, message: "Correo ya registrado" })
        return;
    }

    const slugHandle = slug(handle, '_');
    const handleExists = await User.findOne({ handle: slugHandle });
    if (!!handleExists) {
        res.status(409).json({ status: 409, message: "Nombre de usuario no disponible" });
        return;
    }

    const user = new User(req.body);
    user.password = await hashPassword(password);
    user.handle = slugHandle;
    user.save();
    res.status(201).json({ "status": 201, message: "Usuario registrado correctamente" });
}

export const login = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        res.status(404).json({
            status: 404,
            message: "Usuario y/o contraseña incorrecto"
        })
        return
    }

    const isPasswordCorrect = await comparePassword(password, user.password);
    if (!isPasswordCorrect) {
        res.status(401).json({
            status: 401,
            message: 'Usuario y/o contraseña incorrecto'
        })
        return;
    }

    const token = generateJWT({ id: user._id })

    res.send(token)

}
