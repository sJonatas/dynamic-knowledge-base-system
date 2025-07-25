import { NextFunction, Request, Response } from "express";
import topic from "../types/toppic.type";
import ErrorType from "../types/error.type";
import storage from "../services/storage.service";
import TopicStrategy from "../services/strategies/topic.strategy";

export function requiredFieldsCheck (req: Request|any, res: Response|any, next: NextFunction|any):any {
    let data =  <topic> req.body;

    if (! data.id || !data.content || !data.name) {
        next(<ErrorType>{
            code: 500,
            description: 'The fields `id`, `content` and `name` are requried.',
            name: 'Invalid data provided',
        })

        return;
    }

    next();
}

export async function writeTopic (req: Request|any, res: Response|any, next: NextFunction|any): Promise<any> {
    try {
        let topic: topic = req.body;
        
        const service = new storage(new TopicStrategy());
        await service.write(topic);
        
        next();
    } catch (error) {
        next(error);
    }
}