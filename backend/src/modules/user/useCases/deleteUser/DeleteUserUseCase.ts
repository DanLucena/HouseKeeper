import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";


@injectable()
class DeleteUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute({ id }): Promise<void> {
    const userAlreadyExists = await this.userRepository.findById({ id });

    if (!userAlreadyExists) {
      throw new AppError("User not exists");
    }

    this.userRepository.deleteUser({ id });
  }
}

export { DeleteUserUseCase };