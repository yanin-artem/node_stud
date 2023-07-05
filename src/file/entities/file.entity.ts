import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class File {
  @ApiProperty({ description: 'Айдишник файла', nullable: false })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'имя файла', nullable: true, default: 'file' })
  @Column()
  name: string;

  @ApiProperty({ description: 'файл', nullable: false })
  @Column()
  file: Express.Multer.File;
}
