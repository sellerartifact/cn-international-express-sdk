import request from 'request';
import { Recordable } from '../global';

export function myRequest<T>(
  json: request.Options,
  isReturnResponse?: boolean,
): Promise<T> {
  return new Promise(resolve => {
    request(json, (err, response, body) => {
      if (isReturnResponse) {
        resolve(response as unknown as T);
      } else {
        resolve(body as unknown as T);
      }
    });
  });
}
export function postRequest(url: string, form: Recordable, headers = {}) {
  return new Promise((resolve, reject) => {
    request.post(url, { form, headers }, (err, response, body) => {
      if (!err) {
        resolve(body);
      } else {
        reject(err);
      }
    });
  });
}

export function postJSONRequest<T>(
  url: string,
  json: Recordable,
  headers = {},
  timeout?: number,
): Promise<T> {
  return new Promise((resolve, reject) => {
    request.post(url, { json, headers, timeout }, (err, response, body) => {
      if (!err) {
        resolve(body as T);
      } else {
        reject(err);
      }
    });
  });
}

export function requestImg(url: string, timeout = 3000): Promise<Buffer> {
  let _url = url;
  if (url.endsWith('_.webp')) {
    // 处理webp格式图片
    _url = url.slice(0, -6);
  }
  return new Promise((resolve, reject) => {
    request(
      {
        url: _url,
        encoding: null,
        timeout,
        headers: {
          accept:
            'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
        },
      },
      (err, response, body) => {
        if (err) {
          console.log('err is', err);
          reject(err);
        } else {
          const buffer = Buffer.from(body);
          resolve(buffer);
        }
      },
    );
  });
}
