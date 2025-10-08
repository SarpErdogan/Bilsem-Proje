// src/types.ts
export type ParentNode = {
  // parent node altında istediğin alanlar olabilir.
  // Biz burada örnek olarak "value" alanı kullanıyoruz.
  value?: string;
  [key: string]: any;
};
