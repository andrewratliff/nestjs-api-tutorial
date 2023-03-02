import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../../src/auth/strategy';
import { UserController } from './user.controller';

@Module({
  imports: [JwtModule.register({})],
  controllers: [UserController],
  providers: [JwtStrategy],
})
export class UserModule {}
