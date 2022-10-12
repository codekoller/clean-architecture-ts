import { AccountInMemoryRepository } from '@app/infra/db/inmemory/account-inmemory.repository';
import { CreateAccountUseCase } from '@app/usecases/account/create-account.usecase';

describe('CreateAccountUseCase Test', () => {
  it('should be create a new account', async () => {
    const repository = new AccountInMemoryRepository();
    const createAccountUseCase = new CreateAccountUseCase(repository);
    const output = await createAccountUseCase.execute({
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@mail.com',
      password: 'any_password',
    });
    expect(repository.accounts).toHaveLength(1);
    expect(output).toStrictEqual({
      id: repository.accounts[0].id,
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@mail.com',
      password: 'any_password',
    });
  });
});
