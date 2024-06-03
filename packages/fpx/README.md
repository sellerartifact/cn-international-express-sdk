# `@cn-international-express-sdk/fpx`

## 快速对接递四方物流

### Install

```
pnpm install --save cn-international-express-sdk

OR

pnpm install --save @cn-international-express-sdk/fpx
```

### Usage

```bash
import { Fpx, FpxTypes  } from "cn-international-express-sdk";

OR

import { Fpx, FpxTypes  } from "@cn-international-express-sdk/fpx";

```

For commonJS

```
const { Fpx } = require("@cn-international-express-sdk/fpx");
```

Send a request to the API:

```bash
const fpx = new Fpx({
  app_key: "YOUR_APP_KEY";
  app_token: "YOUR_APP_TOKEN";
});

// create order

await fpx.genRequest<FpxTypes.CreateOrderRes>("ds.xms.order.create", "1.1.0", sendData)

// get ship methods

await fpx.genRequest<FpxTypes.GetShipTypesRes>("ds.xms.logistics_product.getlist", "1.0.0", {
    transport_mode: "1",
}, "en")

```
