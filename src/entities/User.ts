import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('users')
export class User {
  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }

  @PrimaryColumn({ name: 'user_id' })
  id: string

  @Column({ unique: true })
  email: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
