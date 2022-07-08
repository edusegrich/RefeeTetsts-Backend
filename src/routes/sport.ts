import express from 'express'
import { addSport, getSport } from '../controllers/sports'

const router = express.Router()

router.get('/', getSport)
router.post('/', addSport)

export default router