import express from 'express'
import { addUser, getUser, addSport } from '../controllers/users'

const router = express.Router()

router.get('/', getUser)
router.post('/', addUser)
router.patch('/', addSport)

export default router