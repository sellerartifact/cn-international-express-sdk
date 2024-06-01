# `@cn-international-express-sdk/one7feia`

# Install

```shell
pnpm install --save @cn-international-express-sdk/one7feia

import { One7feia as One7feiaExpress, One7feiaTypes } from "@cn-international-express-sdk/one7feia";

const one7feiaExpress = new One7feiaExpress({ app_key: "your_app_key", app_token: "your_app_token" });

one7feiaExpress.genRequest<One7feiaTypes.GetShipTypesRes>("GET", "Common/GetShippingMethods");

```
