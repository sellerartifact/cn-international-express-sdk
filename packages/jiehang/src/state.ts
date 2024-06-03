/* eslint-disable @typescript-eslint/no-namespace */
export interface JieHangConfig {
  base_url?: string;
  app_key: string;
  app_token: string;
}

export namespace JieHangTypes {
  type ShipTypesItem = {
    cnname: string;
    code: string;
  };

  export type GetShipTypesRes = {
    statusCode: string;
    returnDatas?: ShipTypesItem[];
    message: string;
  };

  export type PrintOrderNumberRes = {
    url: string;
  };

  export interface GetOrderTracknumberRes {
    statusCode: string;
    message: string;
    returnDatas: {
      trackNumber: string;
      labelBillid: string;
    }[];
  }

  export interface GetDeliveryTimeRes {
    returnDatas: {
      statusCode: string;
      items: {
        dateTime: string;
      }[];
    }[];
  }

  export interface GetOrderFeeRes {
    Datas: {
      Status: string;
      Amt: string;
      OtherAmt: string;
    }[];
  }

  export interface GoodDetailItem {
    Enname: string;
    Cnname: string;
    Weight: number;
    Price: number;
    Num: number;
    CustomsCode: string;
  }

  export interface CreateOrderRes {
    returnDatas: {
      statusCode: string;
      corpBillid: string;
      message: string;
    }[];
  }
}
