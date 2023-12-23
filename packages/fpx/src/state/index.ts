/* eslint-disable @typescript-eslint/no-namespace */
export interface FpxConfig {
  app_key: string;
  app_token: string;
  base_url?: string;
}

export namespace FpxTypes {
  export interface GetShipTypesRes {
    data: {
      logistics_product_name_cn: string;
      logistics_product_code: string;
    }[];
  }

  export interface PrintOrderNumberRes {
    data: string;
    errors?: { error_msg: string }[];
  }

  export interface GetOrderTracknumberRes {
    result: string;
    data: {
      consignment_info: {
        logistics_channel_no: string;
      };
    }[];
  }

  export interface GoodDetailItem {
    declare_product_code: string;
    declare_product_name_cn: string;
    declare_product_name_en: string;
    declare_product_code_qty: number;
    declare_unit_price_export: number;
    declare_unit_price_import: number;
    currency_export: string;
    currency_import: string;
    brand_export: string;
    brand_import: string;
  }

  export interface CreateOrderRes {
    result: string;
    data: {
      '4px_tracking_no': string;
    };
    errors: {
      error_msg: string;
    }[];
  }
}
