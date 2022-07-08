import express from 'express'
import { getQuestion, addQuestion } from '../controllers/questions'

const router = express.Router()

router.get('/', getQuestion)
router.post('/', addQuestion)

export default router