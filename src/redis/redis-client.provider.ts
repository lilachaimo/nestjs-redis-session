import { Provider } from '@nestjs/common';
import * as Redis from 'ioredis';

export const RedisClientProvider: Provider = {
  provide: 'REDIS_CLIENT',
  useFactory: () => {
    return new Redis({
      host: 'redis', // This should match the service name defined in docker-compose.yml
      port: 6379,    // Redis default port
    });
  },
};
