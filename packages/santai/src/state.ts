/* eslint-disable @typescript-eslint/no-namespace */

export interface SanTaiConfig {
  app_key: string;
  app_token: string;
  user_id: string;
}

export namespace SanTaiTypes {
  export interface GetShipTypesRes {
    shiptypes: {
      attributes: {
        cn_name: string;
        method_code: string;
      };
    }[];
  }

  export interface ReqOrderTracknumberRes {
    orderInfo: {
      trackNumber?: string;
      trackNumberUsps?: string;
    };
  }

  export interface ReqGetFeeRes {
    totalFee: string;
    baseFee: string;
    feeWeight: number;
    regFee: string;
    chargebackTime: string;
    otherFee:
      | {
          fee: string;
        }
      | {
          fee: string;
        }[];
  }

  export interface GoodDetailItem {
    detailDescription: string;
    detailDescriptionCN: string;
    detailQuantity: number;
    detailWorth: number;
    hsCode: string;
    detailCustomLabel: string;
  }

  export interface AddOrderRes {
    orderCode: string;
    note: string;
  }
}
