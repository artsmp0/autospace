import { sum } from '@autospace/sample-lib';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!' + sum(1, 2);
  }
}
