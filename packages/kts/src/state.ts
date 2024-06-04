/* eslint-disable @typescript-eslint/no-namespace */
export interface KtsConfig {
  app_key: string;
  app_token: string;
  get_base_url: string;
  post_base_url: string;
}

export namespace KtsTypes {
  export interface AddOrderRes {
    Response: {
      Head: string;
      ERROR: string;
    };
  }
}

export const shipTypes = [
  { label: '国际小包平邮', value: 9 },
  { label: '国际小包挂号', value: 10 },
  { label: '国际小包陆运平邮', value: 23 },
  { label: '国际小包陆运挂号', value: 24 },
  { label: '国际经济小包平邮', value: 25 },
  { label: '国际经济小包挂号', value: 26 },
  { label: '国际专线小包平邮', value: 27 },
  { label: '国际专线小包挂号', value: 28 },
  { label: '国际电商专递', value: 29 },
  { label: '国际精品小包', value: 32 },
  { label: '国际南美小包挂号', value: 38 },
  { label: '国际卢邮小包挂号', value: 44 },
  { label: '国际比邮小包平邮', value: 47 },
  { label: '国际比邮小包特惠挂号', value: 48 },
  { label: '国际特货小包平邮', value: 63 },
  { label: '国际特货小包挂号', value: 64 },
  { label: '国际电商专递-CD', value: 72 },
  { label: '国际铁路经济小包平邮', value: 93 },
  { label: '国际铁路经济小包挂号', value: 94 },
];
