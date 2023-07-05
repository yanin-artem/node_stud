import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';

export class CreateUserDto {
  @ApiProperty({ description: 'Имя пользователя', nullable: false })
  firstName: string;
  @ApiProperty({ description: 'Фамилия пользователя', nullable: false })
  lastName: string;
  @ApiProperty({ description: 'Почта', nullable: false })
  email: string;
  @ApiProperty({ description: 'Пароль', nullable: false })
  password: string;
}

export const CreateUserSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
});

export const CreateLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
});
