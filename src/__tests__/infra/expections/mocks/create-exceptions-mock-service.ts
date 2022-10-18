import { ExceptionsService } from '@app/infra/exceptions/exceptions.service';
import { Test } from '@nestjs/testing';

export const createExceptionsMockService = async () => {
  const moduleRef = await Test.createTestingModule({
    providers: [ExceptionsService],
  }).compile();

  return {
    service: moduleRef.get<ExceptionsService>(ExceptionsService),
  };
};
