import { Router } from "express";
import {randomUUID} from "crypto";
import {InstanceFactory} from "../controller/factory/userControllerFactory";


const route = Router()

const userRepository = InstanceFactory.getRepositoryInstance()
const userController = InstanceFactory.getControllerInstance()

async function initTeste() {
    console.log("iniciando teste")
    console.log(await userRepository.createUser({id: randomUUID(), name: "teste", email: "teste", password:"teste"}))
    console.log(await userRepository.findUserByEmail("teste"))
}

initTeste()

route.get('/user', userController.showAllUsers.bind(userController))
export { route }