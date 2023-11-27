

import { Database } from "../database";
import { User } from "../domain/entities/User";
import { IUserRepository } from "./IUserReposiroy";

export class UserRepository implements IUserRepository {
  db: Database;

  constructor(db: Database){
    console.log('criando user repository')
    console.log(db)
    this.db = db
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    const user = this.db.users.find((user: User) => user.email === email)

    console.log("buscando user")
    return user
  }

  async createUser(data: User): Promise<void> {
    this.db.users.push(data)
    console.log("criando user")
    console.log(this.db.users)
  }

  async listAllUsers(): Promise<User[]> {
    const users = this.db.users
    console.log("listando user")
    console.log(users)
    return users
  }
}