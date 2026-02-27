import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CommentsService {
  constructor(private readonly httpService: HttpService) {}
  async getUsers() {
    const response = await firstValueFrom(
      this.httpService.get('https://jsonplaceholder.typicode.com/comments'),
    );
    return response.data;
  }
}
