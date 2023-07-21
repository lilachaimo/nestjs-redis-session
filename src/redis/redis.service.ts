import { Injectable, Inject } from '@nestjs/common';
import * as Redis from 'ioredis';

@Injectable()
export class RedisService {
  constructor(@Inject('REDIS_CLIENT') private readonly redisClient: Redis.Redis) {}

  getRedisClient(): Redis.Redis {
    return this.redisClient;
  }
}
