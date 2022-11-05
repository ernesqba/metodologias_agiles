import { Router } from 'express'

import { AuthController } from '../contollers/auth.controller'

const router = Router()

router.post('/signup', AuthController.signUp)
router.post('/login', AuthController.logIn)

export = router
