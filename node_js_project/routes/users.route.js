import express from 'express'
import{getUser, putUser, postUser,deleteUser} 
from '../controllers/user.controller.js'

const router=express.Router()

router.get('/:id',getUser)
router.delete('/:id',deleteUser)
router.put('/:id',putUser)
router.post('/', postUser)

export default router