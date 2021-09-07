import { User } from '../entities/User';

interface IUserDTO {
    username: string;
    password: string;
    email: string;
}

interface IUserRepository {
    findUserByEmail({ email }): Promise<User>
    createUser({ username, password, email }: IUserDTO): Promise<void>;
    deleteUser({ id }): Promise<void>;
    listUsers(): Promise<User[]>;
    elevateAccessLevel({ id }): Promise<void>;
    findById({ id }): Promise<User>;
}

export { IUserDTO, IUserRepository };