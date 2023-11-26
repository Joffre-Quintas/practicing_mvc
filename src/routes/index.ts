import { Router } from "express";
import { UserController } from "../controller/UserController";
import { UserUseCase } from "../useCases/UserUseCase";
import { UserRepository } from "../repositories/UserRepository";
import { db } from "..";

const route = Router()
const userController = new UserController(new UserUseCase(new UserRepository(db)))

route.get('/user', userController.showAllUsers)
export { route }