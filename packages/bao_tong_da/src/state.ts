/* eslint-disable @typescript-eslint/no-namespace */
export interface BaoTongDaConfig {
  app_key: string;
  user_id: string;
  base_url?: string;
}

export namespace BaoTongDaTypes {
  export interface GetShippingMethodsRes {
    GetLogisticsWayResult: {
      string: string[];
    };
  }

  export interface CreateOrderRes {
    's:Fault': {
      faultcode: string;
      faultstring: string;
      detail: {
        FaultMessage: {
          Message: string;
          Type: string;
        };
      };
    };
    CreateOrderResult: {
      ID: string;
      PaperSize: string;
      RefID: string;
      ShippingWay: string;
      TrackingNumber: string;
      Weight: 1;
    };
  }

  export interface GetTrackingNumberRes {
    GetLogisticsInfoResult: CreateOrderRes['CreateOrderResult'];
  }
}
