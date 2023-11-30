import {
  md5,
  postJSONRequest,
  Recordable,
} from '@cn-international-express-sdk/utils';

export interface CneConfig {
  app_key: string;
  app_token: string;
  base_url?: string;
}

export class Cne {
  public config: CneConfig;

  constructor(config: CneConfig) {
    this.config = config;
  }

  async genRequest<T>(action: string, sendData: Recordable = {}) {
    const res = await postJSONRequest(
      this.config.base_url || 'https://api.cne.com/cgi-bin/EmsData.dll?DoApi',
      this.genUserSignature(action, sendData),
    );
    return res as T;
  }

  genUserSignature(action: string, sendData: Recordable) {
    Object.assign(sendData, {
      RequestName: action,
      TimeStamp: Date.now(),
      icID: this.config.app_key,
    });
    const md5_str = md5(
      String(sendData.icID) +
        String(sendData.TimeStamp) +
        this.config.app_token,
    );
    sendData.MD5 = md5_str;
    return sendData;
  }
}
