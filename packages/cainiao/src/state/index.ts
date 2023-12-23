/* eslint-disable @typescript-eslint/no-namespace */
export const shipTypes = [
  {
    label: '菜鸟国际快递_快线_普货',
    value: 'CN_GLO_EXP',
  },
  {
    label: '菜鸟国际快递_快线_带电',
    value: 'CN_GLO_EXP_BAT',
  },
  {
    label: '菜鸟国际快递_标准_普货',
    value: 'CN_GLO_STD',
  },
  {
    label: '菜鸟国际快递_标准_带电',
    value: 'CN_GLO_STD_BAT',
  },
  {
    label: '菜鸟国际快递_简易_普货',
    value: 'CN_GLO_SAV',
  },
  {
    label: '菜鸟国际快递_简易_带电',
    value: 'CN_GLO_SAV_BAT',
  },
  {
    label: '美标准_OPEN_标准小包',
    value: 'CAINIAO_STANDARD_CD',
  },
  {
    label: '拉美标准_OPEN_简易小包',
    value: 'CAINIAO_ECONOMY_SRM_CD',
  },
  {
    label: '成长市场_标准_OPEN_小包',
    value: 'GM_OPEN_STD_CD',
  },
  {
    label: '菜鸟国际标准_C+D',
    value: 'CN_GLO_CD_STD',
  },
];

export const actionTypeToCodeMap: {
  [key in string]: string;
} = {
  'cnge.order.create': 'CNGCP-OPEN',
  'cnge.waybill.get': 'CGOP',
  'cnge.order.cancel': 'CNGCP-OPEN',
};

export interface CaiNiaoConfig {
  user_id: string;
  app_token: string;
  base_url?: string;
}

export namespace CaiNiaoTypes {
  export interface PrintOrderNumberRes {
    success: string;
    errorMsg: string;
    data: {
      trackingNumber: string;
      waybillPdfData: string;
      laneCode: string;
      laneName: string;
      laneLastMileCP: string;
      distributionWarehouse: string;
    };
  }

  export interface AddOrderRes {
    success: string;
    errorMsg: string;
    data: {
      laneCode: string;
      orderCode: string;
      trackingNumber: string;
    };
  }
}
