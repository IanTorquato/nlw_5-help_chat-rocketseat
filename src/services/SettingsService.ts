import { getCustomRepository, Repository } from 'typeorm'

import { Settings } from '../entities/Settings'
import { SettingsRepository } from '../repositories/SettingsRepository'

export class SettingsService {
  private settingsRepository: Repository<Settings>

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository)
  }

  async create({ username, chat }: SettingsCreate) {
    if (await this.settingsRepository.count({ username })) {
      throw new Error('User Already Exist!')
    }

    const settings = this.settingsRepository.create({ username, chat })

    return await this.settingsRepository.save(settings)
  }
}