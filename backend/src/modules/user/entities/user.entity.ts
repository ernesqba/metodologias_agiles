import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ type: 'varchar', unique: true })
  email: string

  @Column({ type: 'varchar', unique: true })
  username: string

  @Column({ type: 'varchar', name: 'first_name' })
  firstName: string

  @Column({ type: 'varchar', name: 'last_name' })
  lastName: string
}
