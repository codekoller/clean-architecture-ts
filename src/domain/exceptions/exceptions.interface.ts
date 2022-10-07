export type FormatExceptionMessageType = {
  message: string;
  codeError?: number;
};

export interface IException {
  badRequestException(data: FormatExceptionMessageType): void;
  internalServerErrorException(data?: FormatExceptionMessageType): void;
  forbiddenException(data?: FormatExceptionMessageType): void;
  UnauthorizedException(data?: FormatExceptionMessageType): void;
}
