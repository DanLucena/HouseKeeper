import { Request, Response } from 'express';
import { CreateUserUseCase } from '../createUser/createUserUseCase';
import { container } from 'tsyringe';

class CreateUserController {

    async handle(request: Request, response: Response) {
        const { username, email, password } = request.body;
        const createUserUseCase = container.resolve(CreateUserUseCase);
        await createUserUseCase.execute({ username, email, password });

        return response.status(201).send();
    }
}

export { CreateUserController };