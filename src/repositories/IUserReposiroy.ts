import { User } from "../domain/entities/User"

export interface IUserRepository {
  findUserByEmail: (email: string) => Promise<User | undefined>
  createUser: (data: User) => Promise<void>
  listAllUsers: () => Promise<User[]>
}