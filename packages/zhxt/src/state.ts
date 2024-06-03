/* eslint-disable @typescript-eslint/no-namespace */
export interface ZhxtConfig {
  app_key: string;
  app_token: string;
  base_url?: string;
}

export namespace ZhxtTypes {
  export interface GetShipTypesRes {
    data: {
      cnname: string;
      code: string;
    }[];
  }

  export interface PrintOrderNumberRes {
    success: number;
    data: {
      lable_file: string;
    }[];
  }

  export interface GoodDetailItem {
    invoice_enname: string;
    invoice_cnname: string;
    invoice_quantity: number;
    invoice_unitcharge: number;
    hs_code: string;
    sku: string;
  }

  export interface GetTrackRes {
    success: number;
    data: {
      channel_hawbcode: string;
      server_hawbcode: string;
      details: {
        track_occur_date: string;
      }[];
    }[];
  }

  export interface GetBusinessFeeRes {
    success: number;
    data: {
      amount: number;
      fee_kind_name: string;
    }[];
  }

  export interface GetBusinessWeightRes {
    success: number;
    data: {
      grossweight: number;
    };
  }

  export interface CreateOrderRes {
    success: number;
    cnmessage: string;
    data: {
      shipping_method_no: string;
    };
  }
}
