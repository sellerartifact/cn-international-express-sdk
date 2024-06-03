# `@cn-international-express-sdk/yanwen`

## 快速对接燕文物流

### Install

```
pnpm install --save @cn-international-express-sdk/yanwen
```

### Usage

```bash

import { YanWen, YanWenTypes  } from "@cn-international-express-sdk/yanwen";

```

For commonJS

```
const { YanWen } = require("@cn-international-express-sdk/yanwen");
```

Send a request to the API:

```bash
const yanwen = new YanWen({
  app_key: "YOUR_APP_KEY",
  app_token: "YOUR_APP_TOKEN"
});

// create order

await yanwen.genRequest<YanWenTypes.CreateOrderRes>("express.order.create", sendData)

// get ship methods

await yanwen.genRequest<YanWenTypes.GetShipTypesRes>("express.channel.getlist")


```
