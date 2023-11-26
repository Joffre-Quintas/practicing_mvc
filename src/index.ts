import express from "express";
import { route } from "./routes";
import { UserRepository } from "./repositories/UserRepository";
import { Database } from "./database";
import { randomUUID } from 'crypto';

const app = express()
export const db = new Database()

app.use(express.json())
app.use(route)

const userRepository = new UserRepository(db)

console.log(userRepository.createUser({id: randomUUID(), name: "teste", email: "teste", password:"teste"}))
console.log(userRepository.findUserByEmail("teste"))

app.listen(3000, () => console.log("Servidor rodando..."))

