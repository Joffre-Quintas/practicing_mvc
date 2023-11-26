import { UserDTO } from "../DTOs/UserDTO";
import { User } from "../domain/entities/User";
import { IUser } from "../domain/interfaces/IUser";
import { UserRepository } from "../repositories/UserRepository";

export class UserUseCase {
  constructor(private userRepository: UserRepository) {}

  async createUser(data: UserDTO){
    const isExist = await this.userRepository.findUserByEmail(data.email)

    if(!isExist) {
      throw new Error('User alredy exist!')
    }
    const user = new User(data)
    await this.userRepository.createUser(user)
  }

  async listAllUsers(): Promise<IUser[]> {
    const allUsers = this.userRepository.listAllUsers()
    return allUsers
  }
}