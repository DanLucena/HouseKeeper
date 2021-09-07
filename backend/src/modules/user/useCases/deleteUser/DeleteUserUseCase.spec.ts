import { AppError } from "../../../../shared/errors/AppError";
import { UserRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory";
import { IUserDTO } from "../../repositories/IUserRepository";
import { CreateUserUseCase } from "../createUser/createUserUseCase";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

let usersRepositoryInMemory: UserRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;
let deleteUserUseCase: DeleteUserUseCase;

describe("Delete Users", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    deleteUserUseCase = new DeleteUserUseCase(usersRepositoryInMemory);
  });

  it("should be able to delete an user", async () => {
    const user: IUserDTO = {
      username: "testeuser",
      password: "teste",
      email: "user@example.com"
    };

    await createUserUseCase.execute(user);
    const userResponse = await usersRepositoryInMemory.listUsers();
    await deleteUserUseCase.execute({ id: userResponse[0].id });
    const userResponseFinal = await usersRepositoryInMemory.listUsers();

    expect(userResponseFinal.length).toBe(0);
  });


  it("should not be able to delete an user that doesnt exist", async () => {
    await expect(
      deleteUserUseCase.execute({ id: 'pasdasasdfjksadhfjksad' })
    ).rejects.toEqual(new AppError("User not exists"));
  });

});