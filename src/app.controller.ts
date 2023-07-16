import {
  Controller,
  UseGuards,
  Post,
  Body,
  Request,
  HttpStatus,
  UsePipes,
  Get,
} from '@nestjs/common';
import {
  CreateLoginSchema,
  CreateUserDto,
  CreateUserSchema,
} from './users/dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from './users/users.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from './users/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { JoiValidationPipe } from './pipes/ValidationPipe';

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
  @UsePipes(new JoiValidationPipe(CreateUserSchema))
  register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.register(createUserDto);
  }

  @Get()
  hello() {
    return 'Hello World!';
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
  @UsePipes(new JoiValidationPipe(CreateLoginSchema))
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
