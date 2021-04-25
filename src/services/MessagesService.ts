import { getCustomRepository, Repository } from 'typeorm'

import { Message } from '../entities/Message'
import { MessagesRepository } from '../repositories/MessagesRepository'

export class MessagesService {
  private messageRepository: Repository<Message>

  constructor() {
    this.messageRepository = getCustomRepository(MessagesRepository)
  }

  async create({ adminId, text, userId }: MessageCreate) {
    const message = this.messageRepository.create({ adminId, text, userId })

    return await this.messageRepository.save(message)
  }

  async findByUser(userId: string) {
    return await this.messageRepository.find({ where: { userId }, relations: ['user'] })
  }
}