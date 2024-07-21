// src/users/users.controller.ts
import { Controller, Post, Body, BadRequestException,Param, ParseIntPipe, Patch  } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() user: Partial<User>): Promise<User> {
    const existingUser = await this.usersService.findOneByEmail(user.email);
    if (existingUser) {
      throw new BadRequestException('Email already registered');
    }
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    return this.usersService.create(user);
  }
  @Post('request-password-reset')
  async requestPasswordReset(@Body('email') email: string): Promise<void> {
    return this.usersService.requestPasswordReset(email);
  }

  @Post('reset-password')
  async resetPassword(
    @Body('email') email: string,
    @Body('newPassword') newPassword: string,
  ): Promise<void> {
    return this.usersService.resetPassword(email, newPassword);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: Partial<User>,
  ): Promise<User> {
    return this.usersService.updateUser(id, updateData);
  }
  // Другие методы для входа, сброса пароля и управления пользователями...
}

