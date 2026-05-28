import { getAllUsers, getUserById, updateUser } from "../services/users.Service.js"
import { createUser } from "../services/users.Service.js"
//פונקציה שמקבלת את כל הספרים ומכניסה אותם ל קובץ JSON

export async function getUser(req, res) {
    try {
        //מכניסה למשתנה את כל הקורסים
        const courses = await getAllUsers()
        //כותב אותם לJSON
        req.json(courses)
    } catch (err) {
        next(err)
    }
}


//מחיקה
export function removeUser(req, res) {
    try {
        //חילוץ ID מהבקשה
        const id = req.params.id
        //מקבלים את user לתוך משתנה
        deleteUser(id)
        //שולח תשובה לבקאנד
        res.send("User deleted")
    } catch (err) {
        next(err)
    }
}
//עדכון
export function putUser(req, res) {
    try {
        //מקבל למשתנה 
        const body = rec.body
        updateUser(body)
    }catch(err){
        next(err)
    }
}
//הוספה
export function postUser() {
    try{
    const body = req.body
        createUser(body)
    }catch(err){
        next(err)
    }
}