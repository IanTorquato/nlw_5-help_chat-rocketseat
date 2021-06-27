import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('settings')
export class Settings {
  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }

  @PrimaryColumn({ name: 'settings_id' })
  id: string

  @Column({ unique: true })
  username: string

  @Column({ default: true })
  chat: boolean

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
