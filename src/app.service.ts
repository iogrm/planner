import { Injectable } from '@nestjs/common';
import { v } from './scalar';

@Injectable()
export class AppService {
  getHello(): Object[] {
    return [v];
  }
}
