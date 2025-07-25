import express, {NextFunction, Request, Response} from 'express';
import TopicStrategy from '../services/strategies/topic.strategy';
import user from '../types/user.type';
import UserRole from '../enums/user-role.enum';
import storage from '../services/storage.service';
import topic from '../types/toppic.type';
import { setCreatedAt, setUpdatedAt } from '../middlewares/timestamp.middleware';
import { requiredFieldsCheck, writeTopic } from '../middlewares/topic.middlewares';

const router = express.Router();

router.get('/', async (request: Request, response: Response) => {
    const service = new storage(new TopicStrategy());

    // @todo add factory to create topics from diff formats e.g. load only the last version as older in child nodes
    const results = await service.getData();

    response.json(results);
});

router.post('/', [ setCreatedAt, setUpdatedAt, requiredFieldsCheck, writeTopic], (request: Request, response: Response) => {
    response.json({
        status: 201
    });
});

module.exports = router;