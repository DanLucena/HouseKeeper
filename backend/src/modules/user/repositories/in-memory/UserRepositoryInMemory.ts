import { User } from "../../entities/User";

import { IUserDTO, IUserRepository } from "../IUserRepository";


class UserRepositoryInMemory implements IUserRepository {
  users: User[] = [];

  async findUserByEmail({ email }: { email: any; }): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  async createUser({ username, password, email }: IUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, { username, password, email });

    this.users.push(user);
  }

  async deleteUser({ id }): Promise<void> {
    this.users.filter((user) => user.id !== id);
  }

  async listUsers(): Promise<User[]> {
    return this.users;
  }

  async elevateAccessLevel({ id }): Promise<void> {
    this.users.find((user) => {
      if (user.id === id) {
        user.isAdmin = true;
      }
    });
  }

  async findById({ id }): Promise<User> {
    return this.users.find((user) => user.id === id);
  }
}

export { UserRepositoryInMemory };