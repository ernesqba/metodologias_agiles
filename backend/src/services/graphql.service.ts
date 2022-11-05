import axios from 'axios'

import { getConfiguration } from '../config/configuration'

type Data = {
  [key: string]: string
}

const configuration = getConfiguration()

export const postGraphqlService = (body: Data): Promise<string> => {
  return Promise.resolve('OK')
}
