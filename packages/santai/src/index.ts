import { Recordable, promiseSoap } from '@cn-international-express-sdk/utils';

export interface SanTaiConfig {
  app_key: string;
  app_token: string;
  user_id: string;
}

export class SanTai {
  public config: SanTaiConfig;

  private url: string = 'http://www.sfcservice.com/ishipsvc/web-service?wsdl';

  constructor(config: SanTaiConfig) {
    this.config = config;
  }

  async genRequest<T>(action: string, sendData: Recordable) {
    const commonObj = {
      HeaderRequest: {
        appKey: this.config.app_key,
        token: this.config.app_token,
        userId: this.config.user_id,
      },
    };
    const res = await promiseSoap<T>(
      this.url,
      action,
      Object.assign(sendData, commonObj),
    );
    return res;
  }
}
