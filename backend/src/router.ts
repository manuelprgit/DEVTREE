import { Router } from 'express';
import { body } from 'express-validator';

import { createAccount, getUsers, login } from './handlers';
import { handleInputsError } from './middleware/validation';

const router = Router();

router.get('/api/users', getUsers);

router.post('/api/auth/register',
    body('handle')
        .notEmpty()
        .withMessage('El handle no puede ir vacío'),
    body('email')
        .isEmail()
        .withMessage('El correo no es valido'),
    body('name')
        .notEmpty()
        .withMessage('El nombre no puede ir vacío'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('La contraseña debe de tener mínimo 8 caracteres'),
    handleInputsError,
    createAccount);

router.post('/api/auth/login',
    body('email')
        .isEmail()
        .withMessage('Correo no valido'),
    body('password')
        .notEmpty()
        .withMessage('La contraseña no puede ir vacía'),
    handleInputsError,
    login);

export { router } 