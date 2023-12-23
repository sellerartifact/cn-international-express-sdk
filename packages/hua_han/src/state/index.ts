/* eslint-disable @typescript-eslint/no-namespace */
export interface HuaHanConfig {
  app_key: string;
  app_token: string;
  base_url?: string;
}

export namespace HuaHanTypes {
  export interface GetShipTypesRes {
    data: {
      cn_name: string;
      code: string;
    }[];
  }

  export interface PrintOrderNumberRes {
    url: string;
  }

  export interface GetTrackNumberRes {
    ask: string;
    data: {
      TrackingNumber: string;
      msg: string;
    }[];
  }

  export interface GetOrderFeeRes {
    ask: string;
    data: {
      total_price: number;
      details: {
        create_date: string;
      }[];
    };
  }

  export interface GetOrderWeightRes {
    ask: string;
    Data: {
      chargeweight: number;
    }[];
  }

  export interface GoodDetailItem {
    invoice_enname: string;
    invoice_cnname: string;
    invoice_weight: number;
    invoice_quantity: number;
    invoice_unitcharge: string;
    invoice_currencycode: string;
    hs_code: string;
  }

  export interface CreateOrderRes {
    ask: string;
    Error: {
      errMessage: string;
    };
    shipping_method_no: string;
  }
}
