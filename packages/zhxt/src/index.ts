import { Recordable, postRequest } from '@cn-international-express-sdk/utils';
import { ZhxtConfig } from './state';

export * from './state';

export class Zhxt {
  public config: ZhxtConfig;

  constructor(config: ZhxtConfig) {
    this.config = config;
  }

  async genRequest<T>(action: string, sendData?: Recordable): Promise<T> {
    const url =
      this.config.base_url ||
      'http://order.globleexpress.com:8051/webservice/PublicService.asmx/ServiceInterfaceUTF8';
    const res: any = await postRequest(url, {
      appToken: this.config.app_token,
      appKey: this.config.app_key,
      serviceMethod: action,
      paramsJson: sendData ? JSON.stringify(sendData) : '',
    });

    return JSON.parse(res) as T;
  }
}
