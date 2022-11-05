import { InsertQueryBuilder, SelectQueryBuilder } from 'typeorm'

import { BaseRepository } from '../../../common/repositories/base-repository.repository'
import dataSource from '../../../config/data-source'
import { UserCreateDto } from '../dtos/user.dto'
import { User } from '../entities/user.entity'

export class UserRepository extends BaseRepository {
  private static createQueryBuiler(): SelectQueryBuilder<User> {
    return dataSource.createQueryBuilder<User>(User, 'user')
  }

  static createUser(user: UserCreateDto): InsertQueryBuilder<User> {
    return this.createQueryBuiler()
      .insert()
      .values([user])
      .returning(['id', 'email', 'username', 'firstName', 'lastName'])
  }
}
