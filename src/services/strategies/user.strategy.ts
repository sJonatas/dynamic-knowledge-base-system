import ModelType from "../../enums/model.enum";
import StorageStrategy from "./storate.strategy";

class UserStrategy implements StorageStrategy {
    path: string;

    constructor() {
        this.path = `${ModelType.user}/`;    
    }
}

export default UserStrategy;