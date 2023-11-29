/* eslint-disable @typescript-eslint/restrict-plus-operands */
import {
  postJSONRequest,
  Recordable,
  md5,
} from '@cn-international-express-sdk/utils';

export interface YanWenConfig {
  app_key: string;
  app_token: string;
  base_url?: string;
}

export class YanWen {
  public config: YanWenConfig;

  constructor(config: YanWenConfig) {
    this.config = config;
  }

  async requestHelp<T>(action: string, reqData: Recordable = {}) {
    const json: Recordable = {
      user_id: this.config.app_key,
      format: 'json',
      method: action,
      timestamp: Date.now(),
      version: 'V1.0',
    };
    const md5Str =
      this.config.app_token +
      json.user_id +
      JSON.stringify(reqData) +
      json.format +
      json.method +
      json.timestamp +
      json.version +
      this.config.app_token;
    const sign = md5(md5Str);
    json.sign = sign;
    const YWServiceEndPoint =
      this.config.base_url || 'https://open.yw56.com.cn/api/order';
    const url = `${YWServiceEndPoint}?${new URLSearchParams(json).toString()}`;
    const res = await postJSONRequest<{
      code: string;
      message: string;
    }>(url, reqData);
    if (res.code !== '0') {
      throw new Error(`燕文物流反馈:${res.message}`);
    }
    return res as any as T;
  }
}
