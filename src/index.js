import database from './database';
import restAPI from './api/rest'

const run = async() => {
    await database()
    restAPI()

}
run()