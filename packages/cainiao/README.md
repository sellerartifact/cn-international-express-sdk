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
import { CaiNiao } from "cn-international-express-sdk";

OR

import { CaiNiao } from "@cn-international-express-sdk/cainiao";

```

For commonJS

```
const { CaiNiao, CaiNiaoTypes } = require("@cn-international-express-sdk/cainiao");
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
