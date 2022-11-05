interface InternalError {
  message: string
  internalCode: string
}
const internalError = (message: string, internalCode: string): InternalError => ({
  message,
  internalCode,
})

export const DATABASE_ERROR = 'database_error'
export const databaseError = (message: string): InternalError => internalError(message, DATABASE_ERROR)

export const SUPABASE_ERROR = 'supabase_error'
export const supabaseError = (message: string): InternalError => internalError(message, SUPABASE_ERROR)
