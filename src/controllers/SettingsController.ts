import { Request, Response } from 'express'

import { SettingsService } from '../services/SettingsService'

export class SettingsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { username, chat } = request.body

    const settingsService = new SettingsService()

    try {
      const settings = await settingsService.create({ username, chat })

      return response.status(201).json(settings)
    } catch (error) {
      console.log(error)

      return response.status(400).json({ error: error.message })
    }
  }
}
