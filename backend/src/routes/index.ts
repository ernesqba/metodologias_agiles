import express, { Request, Response } from 'express'

import autRoutes from '../modules/auth/routes/auth.routes'

const router = express.Router()

// Routes
router.use('/auth', autRoutes)

// Health check
router.get('/health', (_: Request, res: Response): Response => res.status(200).json({ uptime: process.uptime() }))

export default router
