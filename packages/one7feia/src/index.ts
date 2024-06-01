import {
  Recordable,
  postJSONRequest,
} from '@cn-international-express-sdk/utils';
import { One7feiaConfig } from './state';

export * from './state';

export class One7feia {
  public config: One7feiaConfig;

  constructor(config: One7feiaConfig) {
    this.config = config;
  }

  async genRequest<T>(action: string, sendData: Recordable = {}): Promise<T> {
    const baseUrl = `${
      this.config.base_url || 'http://api.17feia.com/eship-api/v1/'
    }${action}`;
    sendData.apiName = this.config.app_key;
    sendData.apiToken = this.config.app_token;
    const res = await postJSONRequest(baseUrl, sendData);
    return res as T;
  }
}
