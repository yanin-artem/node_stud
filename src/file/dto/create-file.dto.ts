import { ApiProperty } from '@nestjs/swagger';

export class CreateFileDto {
  @ApiProperty({ description: 'имя файла', nullable: true, default: 'file' })
  name: string;

  @ApiProperty({ description: 'файл', nullable: false })
  file: Express.Multer.File;
}
