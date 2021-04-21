import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { SettingsRepository } from '../repositories/SettingsRepository'

export class SettingsController {
  async create(request: Request, response: Response) {
    const { username, chat = true } = request.body

    const settingsRepository = getCustomRepository(SettingsRepository)

    const settings = settingsRepository.create({ username, chat })
    console.log(settings)

    await settingsRepository.save(settings)

    response.status(201).json(settings)
  }
}