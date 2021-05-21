import config from 'config'

import mongoose from 'mongoose'

export default async () => {
    try {
        let connectionString;
        if (config.database.username){
            connectionString = `mongodb+srv://${config.database.username}:${config.database.password}@testmongodb.fs0qx.mongodb.net/test`
        }
        await mongoose.connect(connectionString,
            {
                useNewUrlParser : true,
                useCreateIndex : true,
                useFindAndModify : true,
                useUnifiedTopology : true,
            },
        )
        console.log(`Database Connection established. ${config.database.host}:${config.database.port} (dbname = ${config.database.database})`)
    }
    catch (error) {
        console.log(`Database Connection could not established. ${config.database.host}:${config.database.port} (dbname = ${config.database.database})`)
        process.exit()

    }
}
