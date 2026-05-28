import express from 'express'

import coursesRouter from './node_js_project/routes/courses.route.js'
import usersRouter from './node_js_project/routes/users.route.js'

const app= express()

app.use(express.json())

app.use('/users',coursesRouter)
app.use('/courses',usersRouter)

export default app

"localhost:5000/users/1"