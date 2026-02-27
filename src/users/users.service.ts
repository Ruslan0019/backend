import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(private readonly httpService: HttpService) {}
  async getUsers() {
    const response = await firstValueFrom(
      this.httpService.get('https://jsonplaceholder.typicode.com/users'),
    );
    return response.data;
  }
}
