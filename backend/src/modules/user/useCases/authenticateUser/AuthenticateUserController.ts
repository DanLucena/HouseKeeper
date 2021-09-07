import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { password, email } = request.body;

        const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

        const authInfos = await authenticateUserUseCase.execute({ password, email });
        return response.json(authInfos);
    }

}

export { AuthenticateUserController };