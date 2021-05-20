import { Router , Request as ExpressRequest , Response as ExpressResponse , NextFunction, } from 'express'
import config from '../../../config'             
import validator from 'validator'
import UniversalError from '../../../errors/UniversalError'
import { User } from '../../../models/user'
import userService from '../../../services/user'

const router : Router = Router()

router.post('/register', async(request,response : ExpressResponse , next : NextFunction) => {
    try {
        const errors = new UniversalError
    const {body} = request
    if(!body.firstName){
        errors.addError('empty/firstName','Please input firstname')
    }
    if(!body.lastName){
        errors.addError('empty/lastName','Please input lastname')
    }
    if(!body.phoneNumber){
        errors.addError('empty/phoneNumber','Please input phone number')
    }
    if(!body.email){
        errors.addError('empty/email','Please input your email.')
    }
    const user = await userService.register(body,request.get('host'))

    response.json(user)
    }
    catch (error) {
        next(error)
    }
    
})