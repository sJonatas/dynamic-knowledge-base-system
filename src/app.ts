import express, {NextFunction, Request, Response} from "express";
import ErrorType from "./types/error.type";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (request: Request, response: Response) => {
    response.send('Open on port ' + port);
})

const  topics = require("./routes/topic.route");
app.use('/topics', topics);
app.use((err: Error|ErrorType, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        let error = <ErrorType> {
            code: 500,
            description: err.message,
            name: "Untracked error",
        }

        res.json(error);
        return;     
    }

    res.json(err);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})