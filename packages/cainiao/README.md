# @cn-international-express-sdk/cainiao

## 快速对接菜鸟国际物流

```bash
import { CaiNiao } from "cn-international-express-sdk";

OR

import { CaiNiao } from "@cn-international-express-sdk/cainiao";

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

await cainiao.genRequest<AddOrderRes>("cnge.order.create", sendData)()

// get ship methods

await cainiao.getShipTypes()

```
