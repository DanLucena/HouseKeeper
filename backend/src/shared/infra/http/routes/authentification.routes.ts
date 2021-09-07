import { Router } from "express";
import { AuthenticateUserController } from "../../../../modules/user/useCases/authenticateUser/AuthenticateUserController";

const authenticationRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticationRoutes.post("/sessions", authenticateUserController.handle);

export { authenticationRoutes };
