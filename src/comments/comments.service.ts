import { Injectable } from '@nestjs/common';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { Comment } from './entities/comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private repository: Repository<Comment>,
  ) {}

  create(createCommentInput: CreateCommentInput) {
    return this.repository.save(createCommentInput);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, updateCommentInput: UpdateCommentInput) {
    return this.repository.save({ id, ...updateCommentInput });
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}
