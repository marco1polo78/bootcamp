import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';
import { verify } from 'jsonwebtoken';

export function toHashPassWord(req: Request, res: Response, next: NextFunction) {
    try {
        const { password } = req.body;
        const passwordHash = bcrypt.hashSync(password, 10);
        req.body.password = passwordHash;
        next();
    } catch (err) {
        next(err);
    }
}

export function auth(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization || '';
        const data = verify(token, 'secret');
        req.body = { requester: data };
        next();
    } catch (err) {
        next({error: 'User is not authorized'});
    }
}