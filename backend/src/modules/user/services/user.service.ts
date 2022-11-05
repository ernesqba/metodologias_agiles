import { databaseError } from '../../../common/error'
import logger from '../../../common/logger/logger'
import { UserCreateDto } from '../dtos/user.dto'
import { User } from '../entities/user.entity'
import { UserRepository } from '../repositories/user.repository'

export class UserService {
  static async createUser(user: UserCreateDto): Promise<User> {
    try {
      return await UserRepository.executeOne<User>(UserRepository.createUser(user))
    } catch (error) {
      logger.error(error.message)
      throw databaseError('Error to create user')
    }
  }
}
