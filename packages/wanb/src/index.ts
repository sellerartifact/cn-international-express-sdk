import {
  postJSONRequest,
  myRequest,
} from '@cn-international-express-sdk/utils';

export interface WanbConfig {
  app_token: string;
  user_id: string;
  base_url?: string;
}
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
    console.log(url, headers);
    if (method === 'POST') {
      const res = await postJSONRequest<T>(url, sendData || {}, {
        headers,
      });
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

  genAuthorization() {
    const { app_token, user_id } = this.config;
    const Nonce = Date.now();
    return `Hc-OweDeveloper ${user_id};${app_token};${Nonce}`;
  }
}
