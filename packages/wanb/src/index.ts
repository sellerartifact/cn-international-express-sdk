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
    const url = this.getUrl(action);
    const headers = {
      Authorization: this.genAuthorization(),
      Accept: 'application/json',
    };
    if (method === 'POST') {
      const res = await postJSONRequest<T>(url, sendData || {}, headers);
      return res as T;
    } else {
      const res = await myRequest<string>({
        method: 'get',
        url,
        headers,
      });
      return JSON.parse(res) as T;
    }
  }

  /**
   * @description 打印单个面单
   * @param processCode 包裹处理号
   */
  async printLabel(processCode: string) {
    const action = `parcels/${processCode}/label`;
    const res = await myRequest<string>({
      method: 'get',
      url: this.getUrl(action),
      headers: {
        Authorization: this.genAuthorization(),
        Accept: 'application/json',
      },
      encoding: null,
    });
    const buffer = Buffer.from(res);
    return buffer;
  }

  getUrl(action: string) {
    const url = `${
      this.config.base_url || 'http://api-sbx.wanbexpress.com/'
    }api/${action}`;
    return url;
  }

  genAuthorization() {
    const { app_token, user_id } = this.config;
    const Nonce = Date.now();
    return `Hc-OweDeveloper ${user_id};${app_token};${Nonce}`;
  }
}
