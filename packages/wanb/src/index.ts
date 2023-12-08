import {
  postJSONRequest,
  myRequest,
} from '@cn-international-express-sdk/utils';
import { WanbConfig } from './state';

export * from './state';

export class Wanb {
  public config: WanbConfig;

  constructor(config: WanbConfig) {
    this.config = config;
  }

  async genRequest<T>(
    action: string,
    method: 'GET' | 'POST',
    sendData?: Record<string, any>,
  ) {
    const { base_url } = this.config;
    const url = `${base_url || 'http://api-sbx.wanbexpress.com/'}api/${action}`;
    const headers = {
      Authorization: this.genAuthorization(),
      Accept: 'application/json',
    };
    if (method === 'POST') {
      const res = await postJSONRequest<T>(url, sendData || {}, headers);
      return res as T;
    } else {
      // 如果是要打印标签则返回原有数据
      const isReturnResponse = action.includes('/label');
      const res = await myRequest<string>(
        {
          method: 'get',
          url,
          headers,
          encoding: isReturnResponse ? null : undefined,
        },
        isReturnResponse,
      );
      if (isReturnResponse) {
        return res as T;
      } else {
        return JSON.parse(res) as T;
      }
    }
  }

  genAuthorization() {
    const { app_token, user_id } = this.config;
    const Nonce = Date.now();
    return `Hc-OweDeveloper ${user_id};${app_token};${Nonce}`;
  }
}
