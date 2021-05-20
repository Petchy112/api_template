import mongoose from 'mongoose'
import config from './config'
import logger from './logger'


export default async () => {
    try {
        let connectionString;
        if (config.database.username){
            connectionString = `mongodb://${config.database.username}:${config.database.password}@${config.database.host}:${config.database.port}/${config.database.database}`

        }
        await mongoose.connect(connectionString,
            {
                useNewUrlParser : true,
                useCreateIndex : true,
                useFindAndModify : true,
                useUnifiedTopology : true,
            },
        )
        logger.getLogger('database').info(`Database Connection established. ${config.database.host}:${config.database.port} (dbname = ${config.database.database})`)
    }
    catch (error) {
        logger.getLogger('database').error(`Database Connection could not established. ${config.database.host}:${config.database.port} (dbname = ${config.database.database})`)
        process.exit()

    }
}
