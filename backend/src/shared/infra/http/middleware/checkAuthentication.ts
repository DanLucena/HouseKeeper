import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../../../errors/AppError';
import { UserRepository } from '../../../../modules/user/infra/implementations/UserRepository';

interface IPayload {
    sub: string;
}

export async function checkAuthentication(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Missing token", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, "029089c35cd4a58271515458c9cc8ac9") as IPayload;

        const userRepository = new UserRepository();
        const user = await userRepository.findById(user_id);

        if (!user) {
            throw new AppError('User does not exists', 401);
        }

        next();
    } catch {
        throw new AppError("Invalid token", 401);
    }
}