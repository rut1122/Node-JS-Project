import {model,Schema} from "mongoose"

const usersSchema= new Schema({
    name:{
        require: true,
        type: String,
        minlength:4
    },
    mail:{ type: String,
        validator:t=>t.include('@')
    },
    course: String
})

export const UsersModel=model('users', usersSchema)