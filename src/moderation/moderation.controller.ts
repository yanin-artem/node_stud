import { Controller, Post, Get, Body } from '@nestjs/common';
import { ModerationService } from './moderation.service';

@Controller('moderation')
export class ModerationController {
  constructor(private service: ModerationService) {}

 @Post()
  create(@Body() data: any) {
    this.service.moderate(parseInt(data.post_id));
    return {
      message: 'Добавлено в очередь!'
    }
  }

 @Get()
  findAll() {
    return this.service.getJobs();
  }
}