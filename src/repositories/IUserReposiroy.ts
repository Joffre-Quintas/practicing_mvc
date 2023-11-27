import { User } from "../domain/entities/User"
import {Database} from "../database";

export interface IUserRepository {
  db: Database
  findUserByEmail: (email: string) => Promise<User | undefined>
  createUser: (data: User) => Promise<void>
  listAllUsers: () => Promise<User[]>
}