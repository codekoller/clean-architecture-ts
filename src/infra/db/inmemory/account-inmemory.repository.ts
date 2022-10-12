import { AccountRepositoryInterface } from '@app/data/protocols/db/account/account.repository';
import { Account } from '@app/domain/entities/account/account.entity';

export class AccountInMemoryRepository implements AccountRepositoryInterface {
  accounts: Account[] = [];
  async add(input: Account): Promise<void> {
    this.accounts.push(input);
  }

  async find(): Promise<Array<Account>> {
    return this.accounts;
  }
}
