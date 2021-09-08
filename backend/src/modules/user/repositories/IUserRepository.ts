import { User } from '../entities/User';

interface IUserDTO {
    username: string;
    password: string;
    email: string;
}

interface IUserRepository {
    findUserByEmail({ email }): Promise<User>
    findById({ id }): Promise<User>;
    createUser({ username, password, email }: IUserDTO): Promise<void>;
    deleteUser({ id }): Promise<void>;
    listUsers(): Promise<User[]>;
    elevateAccessLevel({ id }): Promise<void>;
}

export { IUserDTO, IUserRepository };