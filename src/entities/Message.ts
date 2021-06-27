import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

import { User } from './User'

@Entity('messages')
export class Message {
  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }

  @PrimaryColumn({ name: 'message_id' })
  id: string

  @Column({ name: 'admin_id', nullable: true })
  adminId: string

  @Column({ nullable: false })
  text: string

  @JoinColumn({ name: 'fk_messages_user_id' })
  @ManyToOne(() => User)
  user: User

  @Column({ name: 'fk_messages_user_id' })
  userId: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
