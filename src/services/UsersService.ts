import { getCustomRepository } from 'typeorm'

import { UsersRepository } from '../repositories/UsersRepository'

export class UsersService {
  async create({ email }: UserCreate) {
    const userRepository = getCustomRepository(UsersRepository)

    const userExist = await userRepository.findOne({ email })

    if (userExist) {
      return userExist
    }

    const user = userRepository.create({ email })

    return await userRepository.save(user)
  }
}