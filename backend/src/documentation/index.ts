import { getConfiguration } from '../config/configuration'
import paths from './paths'

const configuration = getConfiguration()

const port = configuration.port

export default {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'service',
    description: 'service',
    termsOfService: '',
    contact: {
      name: 'Reign',
    },
  },
  servers: [
    {
      url: `http://localhost:${port}/`,
      description: 'Local server',
    },
  ],
  security: [],
  tags: [],
  paths,
  components: {
    securitySchemes: {
      bearerToken: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        in: 'header',
      },
    },
  },
}
