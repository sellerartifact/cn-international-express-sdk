import { Recordable, myRequest } from '@cn-international-express-sdk/utils';
import { YiJingTongConfig } from './state';

export * from './state';

export class YiJingTong {
  private config: YiJingTongConfig;

  private proxy: string;

  constructor(config: YiJingTongConfig, proxy: string) {
    this.config = config;
    this.proxy = proxy;
  }

  async genRequest<T>(action: string, sendData: Recordable = {}): Promise<T> {
    const url =
      (this.config.base_url || 'http://www.eastsunrisewarehouse.com/hwc_api/') +
      action;
    const row = action.includes('add_order.php')
      ? sendData
      : {
          token: this.config.app_token,
          ...sendData,
        };
    const res = await myRequest<T>({
      url,
      json: row,
      method: 'POST',
      proxy: this.proxy,
    });
    return res;
  }
}
