import { XMS } from '@/index';

const xms = new XMS({
  app_token: '',
});

describe('Default cases', () => {
  test('test request', async () => {
    const res = await xms.getShipTypes();
    console.log('res is', res);
    expect(res.length > 0).toBe(true);
  });
});
