import {model,Schema} from "mongoose"

const coursesSchema= new Schema({
    name:{
        require: true,
        type: String,
        minlength:4
    },
    descpition:String
})

export const coursesModel=model('users', coursesSchema)