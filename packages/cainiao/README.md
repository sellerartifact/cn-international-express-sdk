# `@cn-international-express-sdk/cainiao`

## 快速对接菜鸟国际物流

### Install

```
pnpm install --save cn-international-express-sdk

OR

pnpm install --save cn-international-express-sdk/cainiao
```

### Usage

```bash
import { CaiNiao, CaiNiaoTypes  } from "cn-international-express-sdk";

OR

import { CaiNiao, CaiNiaoTypes  } from "@cn-international-express-sdk/cainiao";

```

For commonJS

```
const { CaiNiao } = require("@cn-international-express-sdk/cainiao");
```

Send a request to the API:

```bash
const cainiao = new CaiNiao({
  user_id: "123",
  app_token: "456",
});

// create order

await cainiao.genRequest<CaiNiaoTypes.AddOrderRes>("cnge.order.create", sendData)

// get ship methods

await cainiao.getShipTypes()

```

## 设置发件人地址

去 https://b.cainiao.com/business/export/global/portal/admin/address/address-book 在基础设置里面地址管理里面设置发件人地址
