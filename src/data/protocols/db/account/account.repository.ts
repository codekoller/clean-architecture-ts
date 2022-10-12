import { Account } from '@app/domain/entities/account/account.entity';

export interface AccountRepositoryInterface {
  add(input: Account): Promise<void>;
  find(): Promise<Array<Account>>;
}
