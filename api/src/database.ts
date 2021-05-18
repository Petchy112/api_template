import config from 'config'

export default async () => {
    try {
        let connectionString;
        if (config.database.username){
            connectionString = `mongodb://${config.database.username}:${config.database.password}@${config.database.hostname}:${config.database.port}/${config.database.database}`

        }
    }
}