

import { Database } from "../database";
import { User } from "../domain/entities/User";
import { IUserRepository } from "./IUserReposiroy";

export class UserRepository implements IUserRepository {

  constructor(private db: Database){}

  async findUserByEmail(email: string): Promise<User | undefined> {
    const user = this.db.users.find((user: User) => user.email === email)
  
    return user
  }

  async createUser(data: User): Promise<void> {
    this.db.users.push(data)
  }

  async listAllUsers(): Promise<User[]> {
    const users = await this.db.users
    return users
  }
}