import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const handleInputsError = (req: Request, res: Response, next: NextFunction) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({
            status: 400,
            message: errors.array()
        })
        return
    }
    next();
}
