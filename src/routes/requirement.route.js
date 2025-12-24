import  express from 'express'
const router=express.Router()
import { requirement,showRequirement } from '../controllers/requirement.controller.js'


router.post('/add',requirement)
router.get('/add',showRequirement)







export default router