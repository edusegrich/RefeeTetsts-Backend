import express from 'express'
import { getExam, addExam } from '../controllers/exams'

const router = express.Router()

router.get('/', getExam)
router.post('/', addExam)

export default router