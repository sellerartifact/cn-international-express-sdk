/* eslint-disable @typescript-eslint/no-namespace */
export interface One7feiaConfig {
  app_key: string;
  app_token: string;
  base_url?: string;
}

export namespace One7feiaTypes {
  export type GetShipTypesRes = {
    msg: string;
    flag: boolean;
    productInfos?: ShipTypesItem[];
  };

  type ShipTypesItem = {
    productName: string;
    productCode: string;
    countryCodes: string[];
  };

  export interface AddOrderRes {
    msg: string;
    flag: boolean;
    total: number;
    success: number;
    fail: number;
    successOrders: SuccessOrdersItem[];
    failOrders: FailOrdersItem[];
  }

  type SuccessOrdersItem = {
    insideNumber: string;
    referenceNo: string;
    pdfPath: string;
    deliveryNumber?: string;
  };

  type FailOrdersItem = {
    referenceNo: string;
    errorMessage: string;
  };

  export interface PrintOrderNumberRes {
    msg: string;
    flag: boolean;
    pdfUrls: {
      deliveryNumber: string;
      deliveryNumber2: string;
      deliveryNumbers: string;
      msg: string;
      orderNumber: string;
      url: string;
    }[];
  }
}
