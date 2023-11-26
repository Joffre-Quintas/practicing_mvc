import { randomUUID } from "crypto"
import { IUser } from "../interfaces/IUser"

export class User implements IUser {
  public id: string
  public name: string
  public email: string
  public password: string

  constructor(props: {name: string, email: string, password: string}){
    this.id = randomUUID()
    this.name = props.name
    this.email = props.email
    this.password = props.password
  }
}