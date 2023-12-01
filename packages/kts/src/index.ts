import crypto from 'crypto';
import {
  Recordable,
  myRequest,
  promiseSoap,
} from '@cn-international-express-sdk/utils';

export interface KtsConfig {
  app_key: string;
  app_token: string;
  get_base_url: string;
  post_base_url: string;
}

export class Kts {
  private config: KtsConfig;

  constructor(config: KtsConfig) {
    this.config = config;
  }

  async genRequest<T>(
    action: string,
    method: 'GET' | 'POST',
    sendData: Recordable = {},
  ): Promise<T> {
    if (method === 'GET') {
      const baseUrl =
        this.config.get_base_url ||
        'http://sfapi.trackmeeasy.com/ruserver/api/';
      const res = await myRequest({
        method: 'get',
        url: `${baseUrl}${action}?${new URLSearchParams(sendData).toString()}`,
      });
      return JSON.parse(res as any) as T;
    } else {
      const baseUrl =
        this.config.post_base_url ||
        'http://sfapi.trackmeeasy.com/ruserver/webservice/sfexpressService?wsdl';
      const res = await promiseSoap(baseUrl, action, sendData);
      return (res as any).return as T;
    }
  }

  computedVerifyCode(xml: string) {
    const m = crypto.createHash('md5');
    const str = xml + this.config.app_token;
    m.update(str, 'utf8');
    const verifyCode = m.digest('base64');
    return verifyCode;
  }

  genUserSignature() {
    return crypto
      .createHash('md5')
      .update(this.config.app_key + this.config.app_token, 'utf8')
      .digest('base64');
  }
}
