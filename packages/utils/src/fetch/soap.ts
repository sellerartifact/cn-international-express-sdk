// @ts-expect-error
import { soap as strongSoap } from 'strong-soap';
import * as soap from 'soap';
import { Recordable } from '../global';
import { parseXml } from './xml';

export function promiseStrongSoap<T>(
  url: string,
  action: string,
  obj: Recordable,
  isRaw = false, // 是否返回原始数据
): Promise<T> {
  return new Promise(resolve => {
    strongSoap.createClient(url, {}, function (err: any, client: any) {
      const method = client[action];
      method(obj, (err: any, result: any, envelope: any) => {
        resolve(isRaw ? envelope : parseXml(envelope));
      });
    });
  });
}

export function promiseSoap<T>(
  url: string,
  action: string,
  obj: Recordable,
): Promise<T> {
  return new Promise((resolve, reject) => {
    soap.createClient(url, (err, client) => {
      client[action](obj, (err: any, result: unknown) => {
        if (err) {
          reject(err);
        } else {
          resolve(result as T);
        }
      });
    });
  });
}
