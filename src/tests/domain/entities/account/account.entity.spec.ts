import { AccountProps } from '@app/domain/entities/account/account-props.type';
import { AccountEntity } from '@app/domain/entities/account/account.entity';

describe('Account Test', () => {
  it('should be constructor()', () => {
    let accountProps: AccountProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@mail.com',
      password: 'any_password',
    };
    let account = AccountEntity.create(accountProps);
    expect(account.props).toStrictEqual({
      ...accountProps,
    });

    accountProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@mail.com',
      password: 'any_password',
    };
    expect(account.id).toBeDefined();
    account = AccountEntity.create(accountProps);
    expect(account.props).toStrictEqual({
      ...accountProps,
    });
  });
});
