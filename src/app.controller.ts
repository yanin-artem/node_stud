import {
  Controller,
  UseGuards,
  Post,
  Body,
  Request,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from './users/dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from './users/users.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from './users/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';

@ApiTags('auth')
@Controller()
export class AppController {
  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService,
  ) {}

  @ApiOperation({ summary: 'Регистрация нового пользователя' })
  // @ApiQuery({name: 'email', required: true, description: 'User identifier' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: User })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @Post('auth/register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.register(createUserDto);
  }

  @ApiOperation({ summary: 'Авторизация пользователя' })
  // @ApiQuery({name: 'email', required: true, description: 'User identifier' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: JwtModule,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
