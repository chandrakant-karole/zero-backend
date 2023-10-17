import express from 'express'
import { login, signup } from '~@src/controller/user'
const router = express.Router()

//all routes
router.post('/signup', signup)
router.post('/login', login)

export { router }