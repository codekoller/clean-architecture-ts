import { AccountRepositoryInterface } from '@app/data/protocols/db/account/account.repository';
import { Account } from '@app/domain/entities/account/account.entity';
import { AccountInput, AccountOutput } from '@app/usecases/types/account/account.type';

export class CreateAccountUseCase {
  constructor(private readonly accountRepo: AccountRepositoryInterface) {}

  async execute(input: AccountInput): Promise<AccountOutput> {
    const account = Account.create(input);
    await this.accountRepo.add(account);
    return account.toJSON();
  }
}
