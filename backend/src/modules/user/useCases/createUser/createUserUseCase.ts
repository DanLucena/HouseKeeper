import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../repositories/IUserRepository';
import { hash } from 'bcryptjs';
import { AppError } from '../../../../shared/errors/AppError';

interface IRequest {
    username: string;
    password: string;
    email: string;
}

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) { }

    async execute({ username, password, email }: IRequest): Promise<void> {
        const userAlreadyExists = await this.userRepository.findUserByEmail({ email });
        const passwordUser = await hash(password, 8);

        if (userAlreadyExists) {
            throw new AppError("User already exists");
        }

        this.userRepository.createUser({ username, password: passwordUser, email });
    }
}

export { CreateUserUseCase };