import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Comment } from 'src/comments/entities/comment.entity';
@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  body: string;

  @OneToMany((type) => Comment, (comment) => comment.task)
  comment: Comment[];
}
