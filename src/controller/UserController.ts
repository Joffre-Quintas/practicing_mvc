import { UserDTO } from "../DTOs/UserDTO";
import { UserUseCase } from "../useCases/UserUseCase";
import { IUserController } from "./IUserController";
import { Request, Response } from "express";

export class UserController implements IUserController{
  userUseCase: UserUseCase;

  constructor(userUseCase: UserUseCase){
    console.log('criando user controller')
    this.userUseCase = userUseCase
    console.log(userUseCase)
  }

  async createNewUser (data: UserDTO): Promise<void>{
    try {
      await this.userUseCase.createUser(data)
    } catch (error: any) {
      console.log(error.message)
    }
    return 
  }
  
  async showAllUsers(req:Request,res: Response) {
    console.log(this.userUseCase)
    try {
        const users = await this.userUseCase.listAllUsers()
        console.log("controller showAllUser:",users)
        res.status(200).json({ data: users })
    } catch (error: any) {
      console.log(error.message)
      res.status(404).json({ error: error.message })
    }
  }
  
}