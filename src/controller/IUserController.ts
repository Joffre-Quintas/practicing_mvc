import { UserDTO } from "../DTOs/UserDTO";
import { IUser } from "../domain/interfaces/IUser";

export interface IUserController {
  createNewUser: (data: UserDTO) => Promise<void> 
  showAllUsers: () => Promise<IUser[]> 
}