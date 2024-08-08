/* eslint-disable @typescript-eslint/restrict-plus-operands */
import crypto from 'crypto';
import {
  postJSONRequest,
  Recordable,
  md5,
} from '@cn-international-express-sdk/utils';
import { YanWenConfig } from './state';

export * from './state';

export class YanWen {
  public config: YanWenConfig;

  constructor(config: YanWenConfig) {
    this.config = config;
  }

  async printOrderNumber(orderNumber: string) {
    const action = 'express.order.label.get';
    const data = {
      waybillNumber: orderNumber,
    };
    const res = await this.genRequest<{
      data: {
        base64String: string;
      };
    }>(action, data);
    const buffer = Buffer.from(res.data.base64String, 'base64');
    return buffer;
  }

  async genRequest<T>(action: string, reqData: Recordable = {}) {
    const json: Recordable = {
      user_id: this.config.app_key,
      format: 'json',
      method: action,
      timestamp: Date.now(),
      version: 'V1.0',
    };
    const md5Str =
      this.config.app_token +
      json.user_id +
      JSON.stringify(reqData) +
      json.format +
      json.method +
      json.timestamp +
      json.version +
      this.config.app_token;
    const sign = md5(md5Str);
    json.sign = sign;
    const YWServiceEndPoint =
      this.config.base_url || 'https://open.yw56.com.cn/api/order';
    const url = `${YWServiceEndPoint}?${new URLSearchParams(json).toString()}`;
    const res = await postJSONRequest<{
      code: string;
      message: string;
    }>(url, reqData);
    if (res.code !== '0') {
      throw new Error(`燕文物流反馈:${res.message}`);
    }
    return res as any as T;
  }

  /**
   * @description 解密燕文更新账单信息请求的数据
   */
  aesDecrypt(key: string, encryptedBase64: string) {
    const initialDigest = crypto.createHash('sha1').update(key).digest();
    const sKey = crypto
      .createHash('sha1')
      .update(initialDigest)
      .digest()
      .slice(0, 16);

    // The IV is an empty string in this case, which is not used in ECB mode
    const iv = '';

    // Decode the base64 string
    const encryptedBuffer = Buffer.from(encryptedBase64, 'base64');

    // Decrypt the data
    const decipher = crypto.createDecipheriv('aes-128-ecb', sKey, iv);
    decipher.setAutoPadding(true);
    // @ts-expect-error
    const decrypted = decipher.update(encryptedBuffer, 'binary', 'utf8');
    const decryptedJsonStr = decrypted + decipher.final('utf8');

    return JSON.parse(decryptedJsonStr);
  }
}
