import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @ApiProperty({ description: 'Айдишник пользователя', nullable: false })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Имя пользователя', nullable: false })
  @Column()
  firstName: string;

  @ApiProperty({ description: 'Фамилия пользователя', nullable: false })
  @Column()
  lastName: string;

  @ApiProperty({ description: 'Почта', nullable: false })
  @Column({ unique: true })
  email: string;

  @ApiProperty({ description: 'Пароль', nullable: false })
  @Column()
  password: string;
}
