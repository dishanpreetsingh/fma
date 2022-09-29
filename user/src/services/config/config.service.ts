import { Transport } from '@nestjs/microservices';

export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {
      port: process.env.PORT || 5002,
    };
    this.envConfig.baseUri = process.env.BASE_URI || '127.0.0.1';
    this.envConfig.gatewayPort = process.env.PORT || 5000;
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}
