import { createCourse, getAllCourses, getCourseById } from "../services/courses.service.js";
//פונקציה שמקבלת את כל הספרים ומכניסה אותם ל קובץ JSON

export async function getCourse(req, res) {
    try {
        //מכניסה למשתנה את כל הקורסים
        const courses = await getAllCourses()
        //כותב אותם לJSON
        req.json(courses)
    } catch (err) {
        next(err)
    }
}

export function removeCourse(req, res) {
    try {
        //חילוץ ID מהבקשה
        const id = req.params.id
        //מקבלים את הספר לתוך משתנה
        const course = getCourseById(id)
        deleteCourse(course)
        //שולח תשובה לבקאנד
        res.send("course deleted")
    } catch (err) {
        next(err)
    }
}

export function putCourse(req, res) {
    //מקבל למשתנה 
    try {
        const id = req.params.id
         updateCourse(id)
    }
    catch (err) {
        next(err)
    }

}

export function postCourse() {
    try {
        const body = req.body
        createCourse(body)
    }
    catch (err) {
        next(err)
    }

}