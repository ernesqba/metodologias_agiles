import { Response, Router } from 'express'

import logger from '../common/logger/logger'
import supabase from '../common/supabase/supabase'

const router = Router()

router.post('/signup', async (req, res: Response): Promise<any> => {
  try {
    const user = await supabase.auth.signUp({
      email: req.body.email,
      password: req.body.password,
    })

    logger.debug(user)

    return res.sendStatus(204)
  } catch (error) {
    logger.error(error.message)
  }
})

export = router
