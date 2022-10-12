import { AccountRepositoryInterface } from '@app/data/protocols/db/account/account.repository';
import { Account } from '@app/domain/entities/account/account.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccountModel } from '../../models/account/account.model';

export class AccountMongoDBRepository implements AccountRepositoryInterface {
  constructor(
    @InjectModel(AccountModel.name)
    private readonly mongoHelper: Model<AccountModel>,
  ) {}

  async add(input: Account): Promise<void> {
    await this.mongoHelper.create(input);
  }

  async find(): Promise<Account[]> {
    return this.mongoHelper.find();
  }
}
