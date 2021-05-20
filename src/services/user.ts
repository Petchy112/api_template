import logger from 'logger'
import UniversalError from '../errors/UniversalError'
import config from '../config'
import {User} from '../models/user'
import mongoose from 'mongoose'
const log = logger.getLogger('../services/user')


const thisService = {
    async register(input,host) {
        log.debug('register called',input)
        const {
            firstName,
            lastName,
            phoneNumber,
            email
        }:{
            firstName : string,
            lastName : string,
            phoneNumber : string,
            email : string
        } = input || {}

        const user = new User()
        user.firstName = firstName
        user.lastName = lastName
        user.email = email
        user.phoneNumber = phoneNumber
        await user.save()
    }
    
}
export default thisService