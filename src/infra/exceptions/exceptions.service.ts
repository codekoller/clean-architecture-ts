import {
  ExceptionInterface,
  FormatExceptionMessageInterface,
} from '@app/domain/expections/exception.interface';
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class ExceptionsService implements ExceptionInterface {
  badRequestException(data: FormatExceptionMessageInterface): void {
    throw new BadRequestException(data);
  }
  internalServerErrorException(data?: FormatExceptionMessageInterface): void {
    throw new InternalServerErrorException(data);
  }
  forbiddenException(data?: FormatExceptionMessageInterface): void {
    throw new ForbiddenException(data);
  }
  unauthorizedException(data?: FormatExceptionMessageInterface): void {
    throw new UnauthorizedException(data);
  }
}
