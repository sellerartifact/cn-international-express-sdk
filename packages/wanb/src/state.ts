/* eslint-disable @typescript-eslint/no-namespace */
export interface WanbConfig {
  app_token: string;
  user_id: string;
  base_url?: string;
}

export namespace WanbTypes {
  export interface GetShippingMethodsRes {
    Data: {
      ShippingMethods: {
        Code: string;
        Name: string;
        IsTracking: boolean;
        IsVolumeWeight: boolean;
        MaxVolumeWeightInCm: number;
        Region: string;
      }[];
    };
  }

  export type AddOrderRes =
    | {
        Succeeded: false;
        Error: {
          Message: string;
        };
      }
    | {
        Succeeded: true;
        Data: {
          ProcessCode: string;
          IndexNumber: string;
          ReferenceId: string;
          TrackingNumber: string;
          IsVirtualTrackingNumber: boolean;
          SortCode: string;
          IsRemoteArea: boolean;
          Status: string;
        };
      };
}
