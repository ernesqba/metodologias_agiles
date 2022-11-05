import * as App from '../../package.json'

export type Stage = 'local' | 'development' | 'staging' | 'production'

export interface ServiceConfig {
  stage: Stage
  appName: string
  appVersion: string
  jwt: { publicKey: string }
  port: number
  databaseUrl: string
  supabase: { projectUrl: string; apiKey: string }
}

export function getConfiguration(): ServiceConfig {
  return {
    stage: process.env.STAGE as Stage,
    appName: process.env.APPLICATION_NAME || 'service',
    appVersion: App.version,
    jwt: {
      publicKey: process.env.JWT_PUBLIC_KEY,
    },
    port: parseInt(process.env.PORT) || 3000,
    databaseUrl:
      process.env.DATABASE_URL ||
      'postgresql://postgres:mypassforpostgres@db.jgrlcbastswfyvipjuys.supabase.co:5432/postgres',
    supabase: {
      projectUrl: process.env.PROJECT_URL,
      apiKey: process.env.API_KEY,
    },
  }
}
