import express from 'express'
import { signup } from '~@src/controller/user'
const router = express.Router()

//all routes
router.post('/signup', signup)

export { router }