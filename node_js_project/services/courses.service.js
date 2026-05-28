import{ coursesModel } from "../models/courses.model.js"
import { AppError } from "../middlewares/error.middleware.js"

export async function getAllCourses() {
    const course= await coursesModel.find()
    if(!course||course.length===0)
        throw new AppError(401,'no courses')
    return course
}

export async function getCourseById(id){
    const course= await coursesModel.findById(id)
    if(!course||course.length===0)
        throw new AppError(401,'no course with id')
    return course
}

export async function createCourse(course){
    const course= coursesModel.create(course)
    if(course)
        throw new AppError(400,'exist user')
    return course
}

export async function updateCourse(id) {
    const course= await coursesModel.findByIdAndUpdate(id)
    if(!course||course.length===0)
        throw new AppError(401,'no course with id')
    return course
}

export async function removeCourse(id) {
    const course= await coursesModel.findByIdAndDelete(id)
    if(!course||course.length===0)
        throw new AppError(401,'no course with id')
    return course
}
