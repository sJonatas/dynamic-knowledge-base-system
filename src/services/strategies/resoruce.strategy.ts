import ModelType from "../../enums/model.enum";
import StorageStrategy from "./storate.strategy";

class ResoucStrategy implements StorageStrategy {
    path: string;

    constructor() {
        this.path = `${ModelType.resource}/`;
    }
}

export default ResoucStrategy;