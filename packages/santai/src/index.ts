import {
  Recordable,
  promiseSoap,
  promiseStrongSoap,
} from '@cn-international-express-sdk/utils';
import { SanTaiConfig } from './state';

export * from './state';

export class SanTai {
  public config: SanTaiConfig;

  private url: string = 'http://www.sfcservice.com/ishipsvc/web-service?wsdl';

  constructor(config: SanTaiConfig) {
    this.config = config;
  }

  async getRates(sendData: Recordable) {
    const { country, state, zip_code } = sendData;
    let { weight, length, width, height } = sendData;
    width = width || '10';
    height = height || '10';
    length = length || '10';
    weight = weight || 1;
    const obj = {
      ratesRequestInfo: {
        country,
        state,
        weight,
        zip_code,
        length,
        width,
        height,
        priceType: '1',
      },
    };
    const result = await promiseStrongSoap(this.url, 'getRates', obj);
    return result;
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
