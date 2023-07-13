import { Injectable } from '@nestjs/common';
import { HttpService as Axios } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly axios: Axios) {}

  async getHealthCheck(): Promise<{
    ping: string;
    data: any;
    observable: any;
  }> {
    const awaitedRequest = await this.axios.axiosRef.get(
      'https://animechan.xyz/api/random/anime?title=naruto',
    );

    const observableRequest = await firstValueFrom(
      this.axios.get('https://animechan.xyz/api/random/anime?title=naruto'),
    );

    const { data: observable } = observableRequest;

    const { data } = awaitedRequest;

    return {
      ping: 'pong',
      data,
      observable,
    };
  }
}
