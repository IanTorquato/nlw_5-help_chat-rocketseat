import { Request, Response } from 'express'
import { MessagesService } from '../services/MessagesService'


export class MessagesController {
  async create(request: Request, response: Response): Promise<Response> {
    const { adminId, text, userId } = request.body

    const messagesService = new MessagesService()

    try {
      const message = await messagesService.create({ adminId, text, userId })

      return response.status(201).json(message)
    } catch (error) {
      console.log(error)

      return response.status(400).json({ error: error.message })
    }
  }

  async findByUser(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const messagesService = new MessagesService()

    const messages = await messagesService.findByUser(id)

    return response.json(messages)
  }
}