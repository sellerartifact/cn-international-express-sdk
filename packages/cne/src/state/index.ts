/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-namespace */
export interface CneConfig {
  app_key: string;
  app_token: string;
  base_url?: string;
}

export namespace CneTypes {
  export interface GetShipTypesRes {
    ReturnValue: number;
    List: {
      oName: string;
      cName: string;
    }[];
  }

  export interface CreateOrderRes {
    ReturnValue: number;
    OK: number;
    ErrList?: [
      {
        cMess: string;
        cNo: string;
      },
    ];
  }

  export interface SearchOrderTracknumberRes {
    ReturnValue: number;
    Response_Info: {
      transNbr: string;
    };
  }
}
