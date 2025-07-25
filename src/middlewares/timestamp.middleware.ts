import { NextFunction } from "express";

export function setCreatedAt(req: Request|any, res: Response|any, next: NextFunction|any): any {
    req.body.createAt = new Date();

    next();
}

export function setUpdatedAt(req: Request|any, res: Response|any, next: NextFunction): any {
    req.body.updatedAt = new Date();

    next();
}