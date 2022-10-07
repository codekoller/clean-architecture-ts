import { randomUUID } from 'crypto';

export type UserProps = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

export class User {
  public readonly id: string;
  public props: UserProps;
  private constructor(props: UserProps, id?: string) {
    this.id = id || randomUUID();
    this.props = {
      ...props,
    };
  }

  static create(props: UserProps, id: string): User {
    return new User(props, id);
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
