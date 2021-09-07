import { container } from 'tsyringe';
import { UserRepository } from '../../modules/user/infra/implementations/UserRepository';
import { IUserRepository } from '../../modules/user/repositories/IUserRepository';


// IUserRepository
container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
)