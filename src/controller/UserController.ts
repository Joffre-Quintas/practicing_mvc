import { UserDTO } from "../DTOs/UserDTO";
import { IUser } from "../domain/interfaces/IUser";
import { UserUseCase } from "../useCases/UserUseCase";
import { IUserController } from "./IUserController";

export class UserController implements IUserController{

  constructor(private userUseCase: UserUseCase){ }

  async createNewUser (data: UserDTO): Promise<void>{
    try {
      await this.userUseCase.createUser(data)
    } catch (error: any) {
      console.log(error.message)
    }
    return 
  }
  
  async showAllUsers(): Promise<IUser[]> {
    const users = await this.userUseCase.listAllUsers()
    return users
  }
  
}