import {
  myRequest,
  postJSONRequest,
  Recordable,
} from '@cn-international-express-sdk/utils';

export interface YuntuConfig {
  app_key: string;
  app_token: string;
  base_url?: string;
}

export class Yuntu {
  public config: YuntuConfig;

  constructor(config: YuntuConfig) {
    this.config = config;
  }

  async genRequest<T>(
    method: 'POST' | 'GET',
    action: string,
    sendData: Recordable,
    timeout?: number,
  ): Promise<T> {
    const base_url_prefix =
      this.config.base_url || 'http://oms.api.yunexpress.com/api/';
    const base_url = `${base_url_prefix}${action}`;
    const { app_key, app_token } = this.config;
    const base64Str = Buffer.from(`${app_key}&${app_token}`).toString('base64');
    const headers = {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Basic ${base64Str}`,
    };
    let res: any;
    if (method === 'POST') {
      res = await postJSONRequest(base_url, sendData, headers, timeout);
    } else {
      let reqUrl = base_url;
      if (sendData) {
        reqUrl += `?${new URLSearchParams(sendData).toString()}`;
      }
      res = await myRequest({
        method: 'get',
        url: reqUrl,
        headers,
      });
      res = JSON.parse(res);
    }
    return res as T;
  }
}
