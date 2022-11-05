/* eslint-disable dot-notation */
import { NextFunction, Request, Response } from 'express'

import logger from '../common/logger/logger'
import supabase from '../common/supabase/supabase'

const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = await supabase.auth.getUser(req.headers['authorization'])
    logger.debug(user)
    ;(req as any).user = user
    next()
  } catch (err) {
    logger.error(err)
    const error = new Error(err.message)
    error['status'] = 401
    next(error)
  }
}

export default authMiddleware
