import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty({ description: 'Содержание коммента', nullable: false })
  body: string;
}
