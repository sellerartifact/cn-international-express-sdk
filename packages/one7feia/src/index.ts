import {
  Recordable,
  postJSONRequest,
  requestImg,
} from '@cn-international-express-sdk/utils';
import { One7feiaConfig } from './state';

export * from './state';

export class One7feia {
  static defaultBaseUrl: string = 'http://api.17feia.com/eship-api/v1/';

  public config: One7feiaConfig;

  constructor(config: One7feiaConfig) {
    this.config = config;
  }

  async genRequest<T>(action: string, sendData: Recordable = {}): Promise<T> {
    const baseUrl = `${
      this.config.base_url || One7feia.defaultBaseUrl
    }${action}`;
    sendData.apiName = this.config.app_key;
    sendData.apiToken = this.config.app_token;
    const res = await postJSONRequest(baseUrl, sendData);
    return res as T;
  }

  async printOrderNumber(waybill_number: string) {
    const parseBaseUrl = new URL(
      this.config.base_url || One7feia.defaultBaseUrl,
    );
    const url = `${parseBaseUrl.origin}/label-internal/v1/label/internal/order/${waybill_number}/pdf`;
    const buffer = await requestImg(url, 0);
    return buffer;
  }
}
