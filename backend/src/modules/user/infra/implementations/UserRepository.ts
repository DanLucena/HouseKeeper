import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { IUserDTO, IUserRepository } from "../../repositories/IUserRepository";

class UserRepository implements IUserRepository {
    private users: Repository<User>

    constructor() {
        this.users = getRepository(User);
    }

    async findUserByEmail({ email }): Promise<User> {
        const user = await this.users.findOne({ email });
        return user;
    }

    async createUser({ username, password, email }: IUserDTO): Promise<void> {
        const user = this.users.create({
            username,
            password,
            email
        });

        await this.users.save(user);
    }

    async deleteUser({ id }): Promise<void> {
        await this.users.delete({ id });
    }

    async listUsers(): Promise<User[]> {
        return await this.users.find();
    }

    async elevateAccessLevel({ id }): Promise<void> {
        const user = await this.users.findOne({ id });
        user.isAdmin = true;
    }

    async findById(id: string): Promise<User> {
        const user = await this.users.findOne(id);
        return user;
    }
}

export { UserRepository };