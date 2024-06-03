/* eslint-disable @typescript-eslint/no-namespace */

export interface YanWenConfig {
  app_key: string;
  app_token: string;
  base_url?: string;
}

export namespace YanWenTypes {
  export interface GetShipTypesRes {
    data: {
      nameCh: string;
      id: string;
    }[];
  }

  export interface CreateOrderRes {
    success: boolean;
    data: {
      waybillNumber: string;
    };
    message: string;
  }

  export interface GetOrderRes {
    success: boolean;
    data: {
      waybillNumber: string;
      orderNumber: string;
      referenceNumber: string;
    };
  }
}
