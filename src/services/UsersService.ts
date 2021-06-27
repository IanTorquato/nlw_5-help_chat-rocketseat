import { getCustomRepository, Repository } from 'typeorm'

import { User } from '../entities/User'
import { UsersRepository } from '../repositories/UsersRepository'

export class UsersService {
  private userRepository: Repository<User>

  constructor() {
    this.userRepository = getCustomRepository(UsersRepository)
  }

  async create({ email }: UserCreate) {
    const userExist = await this.userRepository.findOne({ email })

    if (userExist) {
      return userExist
    }

    const user = this.userRepository.create({ email })

    return await this.userRepository.save(user)
  }
}
