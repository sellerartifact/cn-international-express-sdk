import {
  Recordable,
  postJSONRequest,
} from '@cn-international-express-sdk/utils';
import { YiJingTongConfig } from './state';

export * from './state';

export class YiJingTong {
  private config: YiJingTongConfig;

  constructor(config: YiJingTongConfig) {
    this.config = config;
  }

  async genRequest<T>(action: string, sendData: Recordable = {}): Promise<T> {
    const url =
      (this.config.base_url || 'http://www.eastsunrisewarehouse.com/hwc_api/') +
      action;
    const res = await postJSONRequest<T>(url, {
      token: this.config.app_token,
      ...sendData,
    });
    return res;
  }
}
