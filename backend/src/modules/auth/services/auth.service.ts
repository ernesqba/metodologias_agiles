import { supabaseError } from '../../../common/error'
import logger from '../../../common/logger/logger'
import supabase from '../../../common/supabase/supabase'
import { User } from '../../user/entities/user.entity'
import { UserService } from '../../user/services/user.service'
import { LogInDto, SignUpDto } from '../dtos/auth.dto'

export class AuthService {
  static async signUp(data: SignUpDto): Promise<User> {
    const user = await UserService.createUser(data)
    try {
      await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      })
    } catch (error) {
      logger.error(error.message)
      throw supabaseError('Error to create user in supabase db')
    }

    return user
  }

  static async LogIn(data: LogInDto): Promise<any> {
    try {
      return (
        await supabase.auth.signInWithPassword({
          email: data.email,
          password: data.password,
        })
      ).data
    } catch (error) {
      logger.error(error.message)
      throw supabaseError('Error to logIn')
    }
  }
}
