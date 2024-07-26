import { Recordable } from '@cn-international-express-sdk/utils';
import { YiJingTong } from '../src/index';

describe('Default cases', () => {
  test('hello world test', async () => {
    const token = 'YOUR_TOKEN';
    const yjt = new YiJingTong({ app_token: token });
    const res = await yjt.genRequest<Recordable>('hwc_storage_list.php');

    expect(res.error).toBe('T');
  });
});
