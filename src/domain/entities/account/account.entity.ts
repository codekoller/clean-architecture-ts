import { randomUUID } from 'crypto';
import { AccountProps } from './account-props.type';

export class AccountEntity {
  public readonly id: string;
  public props: Required<AccountProps>;
  private constructor(props: AccountProps, id?: string) {
    if (!props) {
      //@ts-expect-error used for ORM
      this.props = {};
      return;
    }
    this.id = id || randomUUID();
    this.props = {
      ...props,
    };
  }

  static create(props: AccountProps, id?: string): AccountEntity {
    return new AccountEntity(props, id);
  }

  get name() {
    return this.props.name;
  }

  private set name(value: string) {
    this.props.name = value;
  }

  get surname() {
    return this.props.surname;
  }

  private set surname(value: string) {
    this.props.surname = value;
  }

  get email() {
    return this.props.email;
  }

  private set email(value: string) {
    this.props.email = value;
  }

  get password() {
    return this.props.password;
  }

  private set password(value: string) {
    this.props.password = value;
  }

  toJSON() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}
