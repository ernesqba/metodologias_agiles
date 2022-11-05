/* eslint-disable dot-notation */
import { NextFunction, Request, Response } from 'express'

import logger from '../common/logger/logger'

const internalServerExceptionMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const onError = () => {
    const error = new Error('Unknown Error')
    logger.error(error.message)
  }

  res.on('finish', () => {
    req['finished'] = true
    if (res.statusCode === 500) onError()
  })
  res.on('close', () => {
    if (req['finished'] !== true) onError()
  })

  next()
}

export default internalServerExceptionMiddleware
