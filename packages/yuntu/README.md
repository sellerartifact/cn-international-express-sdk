# `@cn-international-express-sdk/yuntu`

## 快速对接云途物流

### Install

```
pnpm install --save @cn-international-express-sdk/yuntu
```

### Usage

```bash

import { Yuntu, YuntuTypes  } from "@cn-international-express-sdk/yuntu";

```

For commonJS

```
const { Yuntu } = require("@cn-international-express-sdk/yuntu");
```

Send a request to the API:

```bash
const yuntu = new Yuntu({
  app_key: "YOUR_APP_KEY";
  app_token: "YOUR_APP_TOKEN";
});

// create order

await yuntu.genRequest<YuntuTypes.GetShipTypesRes>("POST", "WayBill/CreateOrder", sendData)

// get ship methods

await yuntu.genRequest<YuntuTypes.GetShipTypesRes>("GET", "Common/GetShippingMethods", {})


```
