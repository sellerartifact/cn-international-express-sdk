import { Recordable, postRequest } from '@cn-international-express-sdk/utils';
import { TuoTouConfig } from './state';

export * from './state';

export class TuoTou {
  private config: TuoTouConfig;

  constructor(config: TuoTouConfig) {
    this.config = config;
  }

  async genRequest<T>(action: string, sendData: Recordable = {}): Promise<T> {
    const url =
      this.config.base_url ||
      'http://order.logtt.com/webservice/PublicService.asmx/ServiceInterfaceUTF8';
    const res = await postRequest(url, {
      appToken: this.config.app_token,
      appKey: this.config.app_key,
      serviceMethod: action,
      paramsJson: JSON.stringify(sendData),
    });
    return JSON.parse(res as string) as T;
  }
}
