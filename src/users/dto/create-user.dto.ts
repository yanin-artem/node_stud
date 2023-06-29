import { ApiProperty } from '@nestjs/swagger';

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
