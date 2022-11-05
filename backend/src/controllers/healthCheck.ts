import { Request, Response } from 'express'

const healthCheck = (_: Request, res: Response): Response => res.status(200).json({ uptime: process.uptime() })

export default healthCheck
