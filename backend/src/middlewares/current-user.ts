import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

interface UserPayload {
    id: string;
    email: string;
}

declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}

export const currentUser = (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {

    const cookie = req.session?._ctx.headers.cookie;
    const token = cookie.substr(cookie.indexOf('=')+1);
    if (!token) {
        return next();
    }

    try {
        const payload = jwt.verify(
            token,
            'retake888'
        ) as UserPayload;
        req.currentUser = payload;
    } catch(err) {
    }

    next();
}