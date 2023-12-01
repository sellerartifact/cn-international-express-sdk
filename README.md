# cn-international-express-sdk

聚合云途,三态,顺丰等国际物流的 nodejs SDK

<p align="center">
    <a href="https://npmcharts.com/compare/cn-international-express-sdk?minimal=true" rel="nofollow"><img src="https://img.shields.io/npm/dm/cn-international-express-sdk.svg" style="max-width:100%;"></a>
    <a href="https://www.npmjs.com/package/cn-international-express-sdk" rel="nofollow"><img src="https://img.shields.io/npm/v/cn-international-express-sdk.svg" style="max-width:100%;"></a>
    <a href="https://www.npmjs.com/package/cn-international-express-sdk" rel="nofollow"><img src="https://img.shields.io/npm/l/cn-international-express-sdk.svg?style=flat" style="max-width:100%;"></a>
</p>

| 物流         | Package                                                             | Status |
| ------------ | ------------------------------------------------------------------- | ------ |
| 杰航国际     | [@cn-international-express-sdk/jiehang](./packages/jiehang)         | ✅     |
| 云途物流     | [@cn-international-express-sdk/yuntu](./packages/yuntu)             | ✅     |
| 三态速递     | [@cn-international-express-sdk/santai](./packages/santai)           | ✅     |
| 菜鸟国际     | [@cn-international-express-sdk/cainiao](./packages/cainiao)         | ✅     |
| 燕文物流     | [@cn-international-express-sdk/yanwen](./packages/yanwen)           | ✅     |
| 纵横迅通国际 | [@cn-international-express-sdk/zhxt](./packages/zhxt)               | ✅     |
| 递一国际     | [@cn-international-express-sdk/cne](./packages/cne)                 | ✅     |
| 递四方       | [@cn-international-express-sdk/fpx](./packages/fpx)                 | ✅     |
| 华翰物流     | [@cn-international-express-sdk/hua_han](./packages/hua_han)         | ✅     |
| 华羽通国际   | [@cn-international-express-sdk/hua_yu_tong](./packages/hua_yu_tong) | ✅     |
| 顺丰国际     | [@cn-international-express-sdk/kts](./packages/kts)                 | ✅     |
| 17FEIA       | [@cn-international-express-sdk/one7feia](./packages/one7feia)       | ✅     |

# Install

```shell
pnpm install --save cn-international-express-sdk


// 由于项目是采用 monorepo 的方式管理的，所以也可直接安装某个物流的SDK包
pnpm install --save @cn-international-express-sdk/santai
pnpm install --save @cn-international-express-sdk/yuntu
```

# Usage

```typescript
import { Yuntu, YuntuConfig } from 'cn-international-express-sdk';

// 其他物流的使用方式类似
const config: YuntuConfig = {
  app_key: 'your_app_key',
  app_token: 'your_app_token',
  base_url: '这个属性为选填,默认为 http://oms.api.yunexpress.com/api/',
};

const yuntu = new Yuntu(config);

// 获取云途物流的配送渠道
await yuntu.genRequest('GET', 'Common/GetShippingMethods');
```

# License

MIT License

Copyright (c) 2023 王珏
