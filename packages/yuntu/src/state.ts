/* eslint-disable @typescript-eslint/no-namespace */
export interface YuntuConfig {
  app_key: string;
  app_token: string;
  base_url?: string;
}

export namespace YuntuTypes {
  export interface GetShipTypesRes {
    Items: {
      CName: string;
      Code: string;
    }[];
  }

  export interface PrintOrderNumberRes {
    Item: {
      Url: string;
    }[];
  }

  export type GetShippingFeeDetailRes = Partial<{
    Item: {
      OccurrenceTime: string;
      StandardMoney: number;
      TrackingNumber: string;
      GrossWeight: number;
      Freight: number;
      RegistrationFee: number;
      OtherFee: number;
    };
  }>;

  export interface GoodDetailItem {
    EName: string;
    CName: string;
    HSCode: string;
    Quantity: number;
    UnitPrice: string;
    UnitWeight: string;
    CurrencyCode: string;
    Remark: string;
  }

  export interface CreateOrderRes {
    Code: string;
    Item: {
      Remark: string;
      WayBillNumber: string;
    }[];
  }

  export interface RegisterIossRes {
    Code: string;
    Message: string;
    IossCode: string;
  }
}
