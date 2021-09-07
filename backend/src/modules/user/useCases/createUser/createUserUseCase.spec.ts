import { AppError } from "../../../../shared/errors/AppError";
import { UserRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory";
import { IUserDTO } from "../../repositories/IUserRepository";
import { CreateUserUseCase } from "./createUserUseCase";

let usersRepositoryInMemory: UserRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Create User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("should be able to create an user", async () => {
    const user: IUserDTO = {
      username: "testeuser",
      password: "teste",
      email: "user@example.com"
    };

    await createUserUseCase.execute(user);

    const userResponse = usersRepositoryInMemory.listUsers();

    expect((await userResponse).length).toBe(1);
  });

  it("should not be able to create an user with same email", async () => {
    const user: IUserDTO = {
      username: "testeuser",
      password: "teste",
      email: "user@example.com"
    };

    await createUserUseCase.execute(user);
    await expect(
      createUserUseCase.execute(user)
    ).rejects.toEqual(new AppError("User already exists"));
  });

});