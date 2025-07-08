/* eslint-disable @typescript-eslint/prefer-for-of */
import {
  Recordable,
  promiseSoap,
  promiseStrongSoap,
} from '@cn-international-express-sdk/utils';
import { JSDOM } from 'jsdom';
import { SanTaiConfig } from './state';

export * from './state';

export class SanTai {
  public config: SanTaiConfig;

  private url: string = 'http://www.sfcservice.com/ishipsvc/web-service?wsdl';

  constructor(config: SanTaiConfig) {
    this.config = config;
  }

  async getRates(obj: Recordable) {
    const { country, state, zip_code, priceType } = obj;
    let { weight, length, width, height } = obj;
    width = width || '10';
    height = height || '10';
    length = length || '10';
    weight = weight || 1;
    const sendData = {
      ratesRequestInfo: {
        country,
        state,
        weight,
        zip_code,
        length,
        width,
        height,
        priceType: priceType || '1',
      },
    };
    const xml = await promiseStrongSoap<string>(
      this.url,
      'getRates',
      Object.assign(sendData, this.getCommonObj()),
      true,
    );
    const DOM = new JSDOM(xml);
    const { document } = DOM.window;
    const aRates = document.querySelectorAll('rates');
    const arr = [];
    const keys = [
      'totalfee',
      'costfee',
      'dealfee',
      'regfee',
      'addons',
      'deliverytime',
      'isweight',
      'iftracking',
      'classtype',
      'classtypecode',
      'shiptypecode',
      'shiptypename',
      'shiptypecnname',
      'isbattery',
    ];
    for (let i = 0; i < aRates.length; i++) {
      const tmp: Recordable = {};
      for (let j = 0; j < keys.length; j++) {
        tmp[keys[j]] = aRates[i].getAttribute(keys[j]);
      }
      arr.push(tmp);
    }
    arr.forEach(item => {
      item.label = `${item.shiptypecnname}-${Number(item.totalfee).toFixed(2)}`;
      item.value = item.shiptypecode;
    });
    return arr;
  }

  async genRequest<T>(action: string, sendData: Recordable) {
    const res = await promiseSoap<T>(
      this.url,
      action,
      Object.assign(sendData, this.getCommonObj()),
    );
    return res;
  }

  getCommonObj() {
    return {
      HeaderRequest: {
        appKey: this.config.app_key,
        token: this.config.app_token,
        userId: this.config.user_id,
      },
    };
  }
}
