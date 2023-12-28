/* eslint-disable @typescript-eslint/no-namespace */
export interface TuoTouConfig {
  app_key: string;
  app_token: string;
  base_url?: string;
}

export namespace TuoTouTypes {
  export interface GetShipTypesRes {
    data: {
      cnname: string;
      code: string;
    }[];
  }

  export interface PrintOrderNumberRes {
    success: string;
    cnmessage: string;
    data: {
      lable_file: string;
    }[];
  }

  export interface GetTrackingNumberRes {
    data: {
      channel_hawbcode: string;
      shipping_method_no: string;
    };
  }

  export interface GetBusinessFeeRes {
    success: number;
    data: {
      amount: number;
      create_date: string;
      fee_kind_name: string;
    }[];
  }

  export interface GetBusinessWeightRes {
    success: number;
    data: {
      grossweight: number;
    };
  }

  export interface GoodDetailItem {
    invoice_enname: string;
    invoice_cnname: string;
    invoice_quantity: number;
    invoice_unitcharge: string;
    hs_code: string;
    invoice_is_electrified: number;
  }

  export interface CreateOrderRes {
    success: number;
    cnmessage: string;
    data: {
      shipping_method_no: string;
    };
  }
}
