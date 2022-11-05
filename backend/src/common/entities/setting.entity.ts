import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Setting<T> {
  @PrimaryColumn({ type: 'varchar', name: 'name' })
  name: string

  @Column({ type: 'jsonb' })
  content: T
}
