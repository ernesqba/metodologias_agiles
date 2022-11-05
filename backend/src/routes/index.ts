import express from 'express'

import healthCheck from '../controllers/healthCheck'
import authRoutes from './auth.routes'

const router = express.Router()

// Routes
router.use('/auth', authRoutes)

// Health check
router.get('/health', healthCheck)

export default router
