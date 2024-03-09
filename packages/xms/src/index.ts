import { Recordable, promiseSoap } from '@cn-international-express-sdk/utils';
import { XMSConfig, XMSTypes } from './state';

export * from './state';

export class XMS {
  public config: XMSConfig;

  constructor(config: XMSConfig) {
    this.config = config;
  }

  async getShipTypes() {
    const action = 'getTransportWayList';
    const result = await this.genRequest<XMSTypes.GetShippingMethodsRes>(
      action,
    );
    const shipTypes = result.transportWays;
    return shipTypes;
  }

  async genRequest<T>(action: string, sendData: Recordable = {}) {
    const userToken = this.config.app_token;
    const url =
      this.config.base_url ||
      'http://119.23.254.109:8086/xms/services/order?wsdl';
    const result: any = await promiseSoap(url, action, {
      userToken,
      ...sendData,
    });
    return result.return as T;
  }
}
