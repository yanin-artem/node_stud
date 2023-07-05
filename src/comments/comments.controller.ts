import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiTags, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { Comment } from './entities/comment.entity';

@ApiTags('comments')
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @ApiOperation({ summary: 'Создание коммента' })
  @ApiQuery({
    name: 'id',
    required: true,
    description: 'Идентификатор коммента',
  })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: Comment })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @ApiOperation({ summary: 'Получение всех комментов' })
  @ApiQuery({
    name: 'id',
    required: true,
    description: 'Идентификатор коммента',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: Array<Comment>,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @ApiOperation({ summary: 'Получить коммент по id' })
  @ApiQuery({
    name: 'id',
    required: true,
    description: 'Идентификатор коммента',
  })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: Comment })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.commentsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Обновить коммент по id' })
  @ApiQuery({
    name: 'id',
    required: true,
    description: 'Идентификатор коммента',
  })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: Comment })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    return this.commentsService.update(+id, updateCommentDto);
  }

  @ApiOperation({ summary: 'Удалить коммент по id' })
  @ApiQuery({
    name: 'id',
    required: true,
    description: 'Идентификатор коммента',
  })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: Comment })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.commentsService.remove(+id);
  }
}
