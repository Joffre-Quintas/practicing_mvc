import {UserRepository} from "../../repositories/UserRepository";
import {UserController} from "../UserController";
import {UserUseCase} from "../../useCases/UserUseCase";
import {Database} from "../../database";

const db = new Database();

export class InstanceFactory {
    private static controller: UserController;
    private static repository: UserRepository;
    private static useCase: UserUseCase;

    static getControllerInstance(): UserController {
        if (!this.controller) {
            if(!this.repository) {
                this.repository = new UserRepository(db);
            } else {
                this.repository = this.repository;
            }

            if (!this.useCase) {
                this.useCase = new UserUseCase(this.repository);
            } else {
                this.useCase = this.useCase;
            }

            this.controller = new UserController(this.useCase);
        }

        return this.controller;
    }

    static getRepositoryInstance(): UserRepository {
        if (!this.repository) {
            this.repository = new UserRepository(db);
        }

        return this.repository;
    }

    static getUseCaseInstance(): UserUseCase {
        if (!this.useCase) {
            if(!this.repository) {
                this.repository = new UserRepository(db);
            } else {
                this.repository = this.repository;
            }
            this.useCase = new UserUseCase(this.repository);
        }

        return this.useCase;
    }
}