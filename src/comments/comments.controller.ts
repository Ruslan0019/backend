import { Controller, Get } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly usersService: CommentsService) {}
  @Get()
  async findAll() {
    return this.usersService.getUsers();
  }
}
