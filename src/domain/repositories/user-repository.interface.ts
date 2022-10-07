import { User } from '../entities/user/user.entity'

export interface IUserRepository {
  insert(): Promise<User>;
  findAll(): Promise<User[]>
}
