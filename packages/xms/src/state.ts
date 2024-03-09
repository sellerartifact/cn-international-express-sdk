/* eslint-disable @typescript-eslint/no-namespace */
export interface XMSConfig {
  app_token: string;
  base_url?: string;
}

type ResponseError = {
  errorCode: string;
  errorInfo: string;
};

export namespace XMSTypes {
  export interface GetShippingMethodsRes {
    transportWays: {
      autoFetchTrackingNo: 'Y' | 'N';
      code: string;
      name: string;
      trackingNoRuleMemo?: string;
      trackingNoRuleRegex?: string;
      used: 'Y' | 'N';
    }[];
  }

  export interface AddOrderRes {
    success: 'true' | 'false';
    id: string;
    trackingNo: string;
    error?: ResponseError;
  }

  export interface PrintOrderNumberRes {
    success: 'true' | 'false';
    error?: ResponseError;
    url: string;
  }
}
