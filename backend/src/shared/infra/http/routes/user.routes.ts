import { Router } from 'express';
import { CreateUserController } from "../../../../modules/user/useCases/createUser/createUserController";
import { DeleteUserController } from '../../../../modules/user/useCases/deleteUser/DeleteUserController';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();

usersRoutes.post('/', createUserController.handle);
usersRoutes.delete('/delete', deleteUserController.handle);

export { usersRoutes };