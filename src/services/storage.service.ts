import resource from '../types/resources.type';
import user from '../types/user.type';
import topic from '../types/toppic.type';
import { JsonDB, Config } from 'node-json-db';
import StorageStrategy from './strategies/storate.strategy';

class storage {
    private db;
    private strategy?: StorageStrategy;

    constructor(strategy: StorageStrategy) {
        this.strategy = strategy;

        this.db = new JsonDB(new Config("src/data/storage.json", true, false,  '/'));
    }

    write = async (data: user | topic | resource) => {
        let files = await this.getData();
        files.push(<never> data)

        await this.db.push(this.strategy!.path, files);
    }

    async getData() {
        try {
            let content = await this.db.getData(this.strategy!.path);
            
            if (Object.keys(content).length === 0) {
                this.db.push(this.strategy!.path, []);    

                return [];
            }

            return content;
        }
        catch (error) {
            this.db.push(this.strategy!.path, []);

            return <Array<any>> [];
        }
    }
}

export default storage;