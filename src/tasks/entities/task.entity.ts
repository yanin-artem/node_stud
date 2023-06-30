import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Comment } from 'src/comments/entities/comment.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Task {
  @ApiProperty({ description: 'Айдишник таски', nullable: false })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Заголовок таски', nullable: false })
  @Column()
  title: string;

  @ApiProperty({ description: 'Содержание таски', nullable: false })
  @Column()
  body: string;

  @ApiProperty({
    description: 'Комментарии таски',
    nullable: true,
    type: Comment,
  })
  @OneToMany(() => Comment, (comment) => comment.task)
  comment: Comment[];
}
