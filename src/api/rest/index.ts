import express, { Express, NextFunction ,Request , Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './routes'
import logger from '../../logger'
import config from '../../config'

export default () => {
    const app : Express = express()

    app.disable ('x-powered-by')
    
    app.use(cors())
    
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    routes(app)

    /* eslint-disable-next-line */
    app.use((error, request:Request ,response : Response, next : NextFunction) => {
        if (error.message === 'nothing') {
            return
        }
        if (error.universal) {
            const status = error.status
            error.status = undefined
            error.amount = undefined
            error.universal = undefined
            error.response(status).json({error : {message : error.message , ...error}})
        }
        throw error
    })

    app.listen(config.api.port,() => logger.getLogger('rest').info(`Server start at 0.0.0.0:${config.api.port}`))
}
