import express from 'express'
import { test, signup } from '@/src/controller/user'
const router = express.Router()
router.get('/', test)

router.post('/signup', signup)

export { router }