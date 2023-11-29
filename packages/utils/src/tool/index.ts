import crypto from 'crypto';

export function md5(str: string) {
  const md5 = crypto.createHash('md5');
  return md5.update(str).digest('hex');
}

export function md5ToBase64(str: string) {
  const md5 = crypto.createHash('md5');
  return md5.update(str).digest('base64');
}
