import { AccountRepositoryInterface } from '@app/data/protocols/db/account/account.repository';
import { Account } from '@app/domain/entities/account/account.entity';

export class AccountInMemoryRepository implements AccountRepositoryInterface {
  acccounts: Account[] = [];
  async add(input: Account): Promise<void> {
    this.acccounts.push(input);
  }

  async find(): Promise<Account[]> {
    return this.acccounts;
  }
}
