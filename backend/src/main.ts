import express, { Express } from 'express'
import swaggerUi from 'swagger-ui-express'

import logger from './common/logger/logger'
import { getConfiguration } from './config/configuration'
import dataSource from './config/data-source'
import documentation from './documentation'
import internalServerExceptionMiddleware from './middlewares/internal-server-exception.middleware'
import routes from './routes'

const app: Express = express()

// JSON Decode
app.use(express.json())

// Swagger documentation
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(documentation))

// Custom middlewares
app.use(internalServerExceptionMiddleware)

// Routes
app.use(routes)

const configuration = getConfiguration()
const port = configuration.port

app.listen(port, async () => {
  // TypeOrm Connection
  try {
    await dataSource.initialize()
    logger.info('Ready db connection!!')
    logger.info(`API Running at port: ${port}`)
  } catch (err) {
    logger.error(err.message)
  }
})
