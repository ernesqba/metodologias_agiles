import { DeleteQueryBuilder, InsertQueryBuilder, SelectQueryBuilder, UpdateQueryBuilder } from 'typeorm'

export class BaseRepository {
  static async executeOne<T>(
    qb: InsertQueryBuilder<any> | UpdateQueryBuilder<any> | DeleteQueryBuilder<any>,
  ): Promise<T> {
    return (await qb.execute())?.raw[0]
  }

  static async createMany<T>(qb: InsertQueryBuilder<any>): Promise<T[]> {
    return (await qb.execute())?.raw
  }

  static getOne<T>(qb: SelectQueryBuilder<any>): Promise<T> {
    return qb.getRawOne<T>()
  }

  static getMany<T>(qb: SelectQueryBuilder<any>): Promise<T[]> {
    return qb.getRawMany<T>()
  }
}
