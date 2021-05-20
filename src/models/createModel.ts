import mongooseDelete from 'mongoose-delete'
import mongooseHidden from 'mongoose-hidden'
import { typedModel , Extract }from 'ts-mongoose'
import { Schema ,Model ,Document } from 'mongoose'
import config from '../config'
import pluralize from 'pluralize'



export default <T extends Schema>(modelName , schema : T ,options :{hidden? : Object, enableHardDelete? : boolean} = {}) => {
    // Use mongoose-delete plugin
    
    if(!options.enableHardDelete) {
            schema.plugin(mongooseDelete, {
                overrideMethod: true,
            })
        }
    //Use mongoose-hidden plugin
    schema.plugin(mongooseHidden(), {
        hidden: {
            _id: false,
            ...options.hidden,
        },
        virtuals: {
            fullname : 'hideJSON',
        },
    })
    const collectionName = config.database.collectionPrelix + '.' + pluralize(modelName.toLowCase())
    const model = typedModel(modelName , schema, collectionName)
    
    return {
        model,
    }
}
