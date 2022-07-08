import express from 'express'
import { getAllQuestions } from '../controllers/questions'

const router = express.Router()

router.get('/', getAllQuestions)

export default router