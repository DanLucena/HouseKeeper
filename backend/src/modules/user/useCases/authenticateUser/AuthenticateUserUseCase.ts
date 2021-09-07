import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken';
import { AppError } from "../../../../shared/errors/AppError";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) { }

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.userRepository.findUserByEmail({ email });

        if (!user) {
            throw new AppError("User or password wrong!");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError("User or password wrong!");
        }

        const token = sign({
            username: user.username,
            email: user.email,
            acesso: user.isAdmin,
            level: user.level,
            experience: user.currentExp

        }, "029089c35cd4a58271515458c9cc8ac9", {
            subject: user.id,
            expiresIn: "1d"
        });

        const returnUser: IResponse = {
            token,
        };

        return returnUser;
    }
}

export { AuthenticateUserUseCase };