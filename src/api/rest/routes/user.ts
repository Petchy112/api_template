import express from 'express'
import config from '../../../config'             
import validator from 'validator'
import UniversalError from '../../../errors/UniversalError'
import { User } from '../../../models/user'
import userService from '../../../services/user'

const router =  express.Router()

router.post('/register', async(req,res,next) => {
    try {
        const errors = new UniversalError
    const {body} = req
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
    const user = await userService.register(body,req.get('host'))

    res.json(user)
    }
    catch (error) {
        next(error)
    }
    
})

export default router