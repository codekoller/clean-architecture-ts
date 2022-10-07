import { User } from '@app/domain/entities/user/user.entity';
import { IUserModel, UserM } from '@app/domain/models/user.model';
import { IUserRepository } from '@app/domain/repositories/user-repository.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, UserModel } from '../schemas/user/user.schema';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectModel(UserModel.name) private readonly mongo: Model<UserDocument>,
  ) {}

  async insert(user: User): Promise<void> {
    const userM = new UserM();
    user.id = userM.id;
    user.name = userM.name;
  }

  async findAll(): Promise<void> {
    this.mongo.find();
  }
}
