/* eslint-disable @typescript-eslint/no-namespace */
export interface XMSConfig {
  app_token: string;
  base_url?: string;
}

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
}
