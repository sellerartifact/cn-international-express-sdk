import {
  Recordable,
  promiseStrongSoap,
} from '@cn-international-express-sdk/utils';
import { HuaHanConfig } from './state';

export * from './state';

export class HuaHan {
  private config: HuaHanConfig;

  constructor(config: HuaHanConfig) {
    this.config = config;
  }

  async genRequest<T>(action: string, sendData?: Recordable): Promise<T> {
    const url =
      this.config.base_url || 'http://api.hh-exp.com/default/svc/wsdl';
    const result: any = await promiseStrongSoap(url, 'callService', {
      paramsJson: JSON.stringify(sendData),
      appToken: this.config.app_token,
      appKey: this.config.app_key,
      service: action,
    });
    return JSON.parse(result.response) as T;
  }
}
