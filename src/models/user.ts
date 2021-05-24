import mongoose from 'mongoose'
import { createSchema, Type ,ExtractDoc , ExtractProps } from 'ts-mongoose'
import config from '../config'
import createModel from './createModel'



const schema = createSchema(
    {
        userId: Type.string({ require:false }),
        firstName : Type.string({ require:true }),
        lastName : Type.string({require:true}),
        phoneNumber :Type.string({require:true}),
        email : Type.string({require:true})
    }
)
export const {model:User} = createModel('User',schema ,{enableHardDelete : false})
export const userSchema = schema