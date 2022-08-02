import { Router } from "express";
import UserController from "../controllers/user.controller";
import { createUserValidator } from "../middlewares/form-validators/create_user_validator";
import { updateUserValidator } from "../middlewares/form-validators/update_user_validator";

export default class UserRoutes {
    private path = '/users';
    private router = Router();
    private userController = new UserController();

    constructor() {
        this.createRoutes();
    }

    public getRouter(): Router {
        return this.router;
    }

    private createRoutes() {
        this.router.get(`${this.path}`, this.userController.getUsers);

        this.router.get(`${this.path}/:id(\\d+)`, this.userController.getUserById);

        this.router.post(`${this.path}`, createUserValidator, this.userController.createUser);

        this.router.put(`${this.path}/:id(\\d+)`, updateUserValidator, this.userController.updateUser);

        this.router.delete(`${this.path}/:id(\\d+)`, this.userController.deleteUser);
    }
}