import { Controller } from '@nestjs/common';
import { EventPattern, GrpcMethod, MessagePattern } from '@nestjs/microservices';

@Controller('register')
export class RegisterController {
  @MessagePattern({cmd: 'sum'})
  async register(email: string): Promise<boolean> {
    if (email) {
      return await true;
    } else {
      return await false;
    }
  }

  @EventPattern('user_created')
  async handleUser(data: Record<string, unknown>) {
    // busines logic
  }

  @GrpcMethod('HeroService', 'FindOne')
  findOne(data: string, metada: any): any {
    console.log('parametro microservice', data);
    const items = {
      resp: 'true',
    }
    return items;
  }
}
