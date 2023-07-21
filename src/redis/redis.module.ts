import { Module } from '@nestjs/common';
import { RedisClientProvider } from './redis-client.provider';

@Module({
  providers: [RedisClientProvider],
  exports: ['REDIS_CLIENT'],
})
export class RedisModule {}
