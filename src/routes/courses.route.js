import express from 'express'
import{getCourse,removeCourse,postCourse,putCourse,} from '../controllers/courses.controller.js'

const router=express.Router()

router.get('/',getCourse)
router.get('/:id',getCourse)
router.delete('/:id',removeCourse)
router.put('/:id',putCourse)
router.post('/', postCourse)

export default router