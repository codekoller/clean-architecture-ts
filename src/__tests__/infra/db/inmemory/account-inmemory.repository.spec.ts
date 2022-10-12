import { AccountProps } from '@app/domain/entities/account/account-props.type';
import { Account } from '@app/domain/entities/account/account.entity';
import { AccountInMemoryRepository } from '@app/infra/db/inmemory/account-inmemory.repository';

describe('AccountInMemoryRepository Test', () => {
  it('should be insert a new account', async () => {
    const repository = new AccountInMemoryRepository();
    let accountProps: AccountProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@mail.com',
      password: 'any_password',
    };
    const account = Account.create(accountProps);
    await repository.add(account);
    expect(repository.acccounts).toHaveLength(1);
    expect(repository.acccounts).toStrictEqual([account]);
  });

  it('should be find all accounts', async () => {
    const repository = new AccountInMemoryRepository();
    let accountProps: AccountProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@mail.com',
      password: 'any_password',
    };
    const account = Account.create(accountProps);
    await repository.add(account);
    await repository.find();
    expect(repository.acccounts).toHaveLength(1);
    expect(repository.acccounts).toStrictEqual([account]);
  });
});
