import {
  Recordable,
  postJSONRequest,
} from '@cn-international-express-sdk/utils';
import { JieHangConfig } from './state';

export * from './state';

export class JieHang {
  public config: JieHangConfig;

  constructor(config: JieHangConfig) {
    this.config = config;
  }

  async genRequest<T>(action: string, sendData: Recordable = {}): Promise<T> {
    const baseUrl =
      this.config.base_url ||
      'http://xt.jiehang.net/PostInterfaceService?method=';
    sendData.Verify = {
      Clientid: this.config.app_key,
      Token: this.config.app_token,
    };
    const res = await postJSONRequest(baseUrl + action, sendData);
    return res as T;
  }
}
