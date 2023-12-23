/* eslint-disable @typescript-eslint/restrict-plus-operands */
import {
  postRequest,
  Recordable,
  md5ToBase64,
} from '@cn-international-express-sdk/utils';

import { CaiNiaoConfig, actionTypeToCodeMap, shipTypes } from './state/index';

export type { CaiNiaoConfig, CaiNiaoTypes } from './state/index';

export class CaiNiao {
  public config: CaiNiaoConfig;

  constructor(config: CaiNiaoConfig) {
    this.config = config;
  }

  getShipTypes() {
    return Promise.resolve(shipTypes);
  }

  async genRequest<T>(action: string, sendData: Recordable = {}) {
    const commonData: Recordable = {
      msg_type: action,
      logistic_provider_id: this.config.user_id,
      to_code: actionTypeToCodeMap[action],
      logistics_interface: JSON.stringify(sendData),
    };
    commonData.data_digest = encodeURI(
      md5ToBase64(commonData.logistics_interface + this.config.app_token),
    );
    const base_url =
      this.config.base_url || 'https://link.cainiao.com/gateway/link.do';

    const res = await postRequest(base_url, commonData, {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    });
    const returnData = JSON.parse(res as string);
    if (returnData.success !== 'true') {
      throw new Error(returnData.errorMsg);
    } else {
      return returnData as T;
    }
  }
}
