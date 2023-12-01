/* eslint-disable @typescript-eslint/restrict-plus-operands */
import {
  Recordable,
  md5,
  postJSONRequest,
} from '@cn-international-express-sdk/utils';

export interface FpxConfig {
  app_key: string;
  app_token: string;
  base_url?: string;
}

export class Fpx {
  private config: FpxConfig;

  constructor(config: FpxConfig) {
    this.config = config;
  }

  async genRequest<T>(
    action: string,
    version: string,
    sendData: Recordable,
    language = 'cn',
  ): Promise<T> {
    const searchObj: Recordable = {
      app_key: this.config.app_key,
      timestamp: Date.now(),
      format: 'json',
      v: version,
      method: action,
    };
    searchObj.sign = this.genSign(searchObj, sendData);
    searchObj.language = language;

    const commonHeader = {
      Accept: '*/*',
    };
    const res = await postJSONRequest(
      this.genRequesetUrl(searchObj),
      sendData,
      commonHeader,
    );
    return res as T;
  }

  private genRequesetUrl(searchObj: Recordable) {
    return `${
      this.config.base_url || 'http://open.4px.com/router/api/service'
    }?${new URLSearchParams(searchObj).toString()}`;
  }

  private genSign(searchObj: Recordable, sendObj: Recordable) {
    const rowStr = this.raw(searchObj);
    const md5Str = rowStr + JSON.stringify(sendObj) + this.config.app_token;
    return md5(md5Str);
  }

  private raw(args: Recordable) {
    let keys = Object.keys(args);
    keys = keys.sort();
    const newArgs: Recordable = {};
    keys.forEach(function (key) {
      newArgs[key] = args[key];
    });

    let string = '';
    for (const k in newArgs) {
      string += k + newArgs[k];
    }
    return string;
  }
}
