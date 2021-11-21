import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';

import { validateRequest } from '../middlewares/validate-request';
import { Account } from '../models/account';
import { BadRequestError } from '../errors/bad-request-error';
import { Password } from '../services/password';

const router = express.Router();

router.post('/api/auth/signin', [
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .notEmpty()
        .withMessage('You must apply a password')
],
validateRequest,
async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = await Account.findOne({ email });
    if (!existingUser) {
        throw new BadRequestError('Invalid credentials');
    }

    const passwordMatch = await Password.compare(
        existingUser.password,
        password
    );
    if (!passwordMatch) {
        throw new BadRequestError('Invalid credentials');
    }

    const userJwt = jwt.sign({
        id: existingUser.id,
        email: existingUser.email
    },
    'retake888'
    );

    req.session = {
        jwt: userJwt
    };

    res.status(200).send(existingUser);
}
);

export { router as signinRouter };