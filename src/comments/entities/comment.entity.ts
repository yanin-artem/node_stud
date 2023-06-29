import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Task } from 'src/tasks/entities/task.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Comment {
  @ApiProperty({ description: 'Айдишник коммента', nullable: false })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Тело коммента', nullable: false })
  @Column()
  body: string;

  @ManyToOne((type) => Task, (task) => task.comment, { eager: true })
  task: Task;
}
