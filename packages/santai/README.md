# `@cn-international-express-sdk/santai`

## 快速对接三态物流

### Install

```
pnpm install --save @cn-international-express-sdk/santai
```

### Usage

```bash

import { SanTai, SanTaiTypes  } from "@cn-international-express-sdk/santai";

```

For commonJS

```
const { SanTai } = require("@cn-international-express-sdk/santai");
```

Send a request to the API:

```bash
const sanTai = new SanTai({
  app_key: "YOUR_APP_KEY",
  app_token: "YOUR_APP_TOKEN",
  user_id: "YOUR_USER_ID"
});

// create order

await sanTai.genRequest<SanTaiTypes.AddOrderRes>("addOrder", {
      addOrderRequestInfo: sendData,
})

// get ship methods

await sanTai.genRequest<SanTaiTypes.GetShipTypesRes>("getShipTypes", { divisionId: 1,})


```
