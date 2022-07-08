import express from 'express'
import { loginUser } from '../controllers/users'

const router = express.Router()

router.post('/', loginUser)

export default router