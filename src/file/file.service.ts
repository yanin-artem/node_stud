import { Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { Repository } from 'typeorm';
import { File } from './entities/file.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File)
    private repository: Repository<File>,
  ) {}
  create(data: CreateFileDto) {
    return this.repository.save(data);
  }
}
