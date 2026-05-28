import{ UsersModel} from "../models/users.model.js"
import { AppError } from "../middlewares/error.middleware.js"
export async function getAllUsers() {
    const user=await UsersModel.find()
    if(!user||user.length===0)
        throw new AppError(401,'no user')
    return user
}

export async function getUserById(id){

    const user=await UsersModel.findById(id)
    if(!user||user.length===0)
        throw new AppError(401,'no user with id')
    return user
}
export async function createUser(user){
    const user=await UsersModel.create(user)
    if(user)
        throw new AppError(400,'exist user')
    return user
}

export async function updateUser(id) {
    const user= await UsersModel.findByIdAndUpdate(id)
    if(!user||user.length===0)
        throw new AppError(401,'no course with id')
    return user
}

export async function deleteUser(id) {
    const user=await UsersModel.findByIdAndDelete(id)
    if(!user||user.length===0)
        throw new AppError(401,'not found user')
    return user
}
