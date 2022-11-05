import * as path from 'path'
import { DataSourceOptions } from 'typeorm'

import { getConfiguration } from './configuration'

const configVars = getConfiguration()

const config: DataSourceOptions = {
  type: 'postgres',
  url: configVars.databaseUrl,
  applicationName: configVars.appName,
  logging: process.env.NODE_ENV !== 'production',
  synchronize: false,
  migrationsRun: false,
  entities: [path.join(__dirname, `/../**/*.entity.{ts,js}`)],
  migrations: [path.join(__dirname, `/../migrations/*.{ts,js}`)],
  uuidExtension: 'uuid-ossp',
  installExtensions: true,
  connectTimeoutMS: 10000,
  extra: {
    poolSize: 30,
  },
}

export = config
