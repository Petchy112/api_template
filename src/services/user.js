import UniversalError from '../errors/UniversalError'
import config from '../config'
const  {User} = require('../models/user') ,
consr mongoose = require('mongoose')




const thisService = {
    async register(input,host) {
        console.log('register called',input)
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