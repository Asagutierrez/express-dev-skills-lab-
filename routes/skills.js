import { Router } from 'express'
import * as skillsCtrl from '../controller/skills.js'

const router = Router()

// GET localhost:3000/skills
router.get('/', skillsCtrl.index)
// GET localhost:3000/skills/new
router.get('/new', skillsCtrl.new)
// GET localhost:3000/skills/:skillId
router.get('/:skillId', skillsCtrl.show)
// POST localhost:3000/skills
router.post('/', skillsCtrl.create)
// DELETE localhost:3000/skills/:skilliId
router.delete('/:skillId', skillsCtrl.delete)

export { router }