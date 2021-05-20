import express, { Express } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './routes'
import logger from 'logger'
import config from '../../config'

export default () => {
    const app : Express = express()

    app.disable ('x-powered-by')
    
    app.use(cors())
    
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended:false }))
    routes(app)

    app.use((error, request ,response, next) => {
        if (error.message === 'nothing') {
            return
        }
        throw error
    })

    app.listen(config.api.port,() => logger.getLogger('rest').info(`Server start at 0.0.0.0:${config.api.port}`))
}
