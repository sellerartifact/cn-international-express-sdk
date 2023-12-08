export interface WanbConfig {
  app_token: string;
  user_id: string;
  base_url?: string;
}

export interface WanbGetShippingMethodsRes {
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

export type WanbAddOrderRes =
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
