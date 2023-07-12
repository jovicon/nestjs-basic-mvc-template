import { Injectable } from '@nestjs/common';
import { HttpService as Axios } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private readonly axios: Axios) {}

  async getHealthCheck(): Promise<{ ping: string; data: any }> {
    const request = await this.axios.axiosRef.get(
      'https://animechan.xyz/api/random/anime?title=naruto',
    );

    const { data } = request;

    return {
      ping: 'pong',
      data,
    };
  }
}
