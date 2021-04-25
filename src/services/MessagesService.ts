import { getCustomRepository } from 'typeorm'

import { MessagesRepository } from '../repositories/MessagesRepository'

export class MessagesService {
  async create({ adminId, text, userId }: MessageCreate) {
    const messageRepository = getCustomRepository(MessagesRepository)

    const message = messageRepository.create({ adminId, text, userId })

    return await messageRepository.save(message)
  }
}