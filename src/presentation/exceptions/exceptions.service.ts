import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import {
  IException,
  FormatExceptionMessageType,
} from '../../domain/exceptions/exceptions.interface';

@Injectable()
export class ExceptionsService implements IException {
  badRequestException(data: FormatExceptionMessageType): void {
    throw new BadRequestException(data);
  }
  internalServerErrorException(data?: FormatExceptionMessageType): void {
    throw new InternalServerErrorException(data);
  }
  forbiddenException(data?: FormatExceptionMessageType): void {
    throw new ForbiddenException(data);
  }
  UnauthorizedException(data?: FormatExceptionMessageType): void {
    throw new UnauthorizedException(data);
  }
}
