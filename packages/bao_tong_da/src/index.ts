import { Recordable, promiseSoap } from '@cn-international-express-sdk/utils';
import { BaoTongDaConfig } from './state';

export * from './state';

export class BaoTongDaExpress {
  private config: BaoTongDaConfig;

  constructor(config: BaoTongDaConfig) {
    this.config = config;
  }

  async genRequest<T>(action: string, sendData: Recordable = {}) {
    const url = this.getUrl();
    const authData = {
      clientId: this.config.app_key,
      clientAccount: this.config.user_id,
    };
    const commonObj = {
      HeaderRequest: {
        'Content-Type': 'text/xml; charset=utf-8',
        SOAPAction: `http://tempuri.org/ILogisticsService/${action}`,
      },
    };
    const res = await promiseSoap<any>(url, action, {
      ...authData,
      ...Object.assign(sendData, commonObj),
    });
    return res as T;
  }

  getUrl() {
    const defaultUrl = 'http://121.15.2.131:8099/LogisticsService.svc?wsdl';
    return this.config.base_url || defaultUrl;
  }

  /**
   *
   * @param amazon_id_mock 创建国际运单传递的ID
   */
  async printOrderNumber(
    amazon_id_mock: string,
    type: 'L10x10' | '10x15' | 'A4' | string,
  ) {
    const url = `http://121.15.2.131:8099/GenerateLabels.ashx?type=${type}&ids=${amazon_id_mock}&HasInvoice=`;
    return url;
  }
}
