import { logger } from '../utils/logger';
import * as mongoose from 'mongoose';
class MongoConnection {
    constructor() {
        this.initiateUserMongoConnection();
    }

    /**
     * @description User MongoDb Connection
     */
    async initiateUserMongoConnection() {
        try{
            mongoose.set('debug',true)
            await mongoose.connect('mongodb://localhost:27017/bigbasket')
            logger.info('Initiated Mongo User Conection');

        }catch(e){
            logger.info('DB WENT WRONG');
        }   
    }
}

export const mongo = new MongoConnection();
