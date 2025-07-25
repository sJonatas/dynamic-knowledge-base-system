import ModelType from "../../enums/model.enum";
import StorageStrategy from "./storate.strategy";

class TopicStrategy implements StorageStrategy {
    path: string;

    constructor() {
        this.path = `${ModelType.topic}/`;
    }
}

export default TopicStrategy;