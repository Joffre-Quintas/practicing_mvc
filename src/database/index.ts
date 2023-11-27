import { User } from "../domain/entities/User";

export class Database {
  public users: User[] = []

    constructor(){
        console.log('criando database')
    }
}