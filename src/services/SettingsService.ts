import { getCustomRepository } from 'typeorm'

import { SettingsRepository } from '../repositories/SettingsRepository'

export class SettingsService {
  async create({ username, chat }: SettingsCreate) {
    const settingsRepository = getCustomRepository(SettingsRepository)

    if (await settingsRepository.count({ username })) {
      throw new Error('User Already Exist!')
    }

    const settings = settingsRepository.create({ username, chat })

    return await settingsRepository.save(settings)
  }
}