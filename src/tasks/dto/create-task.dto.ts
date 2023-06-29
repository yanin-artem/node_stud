import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ description: 'Заголовок таски', nullable: false })
  title: string;
  @ApiProperty({ description: 'Содержание таски', nullable: false })
  body: string;
}
