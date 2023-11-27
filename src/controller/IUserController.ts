import { UserDTO } from "../DTOs/UserDTO";
import { IUser } from "../domain/interfaces/IUser";
import {UserUseCase} from "../useCases/UserUseCase";
import { Request, Response } from "express";

export interface IUserController {
  userUseCase: UserUseCase
  createNewUser: (data: UserDTO) => Promise<void> 
  showAllUsers: (req: Request, res: Response) => Promise<void>
}