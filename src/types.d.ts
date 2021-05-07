declare interface SearchKeyOption {
  query: string;
  category: string;
  count: number;
}
declare interface PageProp {
  aside?: boolean;
  header?: boolean;
  footer?: boolean;
}

declare interface GlobalSearcherProp {
  options: any[];
  defaultValue: string;
  value: string;
  placeholder: string;
}

declare interface PropItemType {
  required?: boolean;
  validation?: () => boolean;
  type: any;
  default?: string | number | boolean | (() => object | array);
}
declare type SlotType = PropType<JSX.Element | Slot | Boolean>;
declare interface ResponseBody<T = any> {
  code: number;
  msg?: string;
  errMsg?: string;
  result: T;
}
declare interface ArticleData {
  _id?: string;
  title: string;
  tags?: string[];
  catagory?: string;
  content: string;
  createdAt?: Date;
  modifiedAt?: Date;
  state?: number;
  draft?: boolean;
  stats?: any;
  extra?: any;
}
declare interface Query {
  [x: string]: any;
}
declare type TagInfo = Array<{ tag: string; count: number; checked?: boolean }>;
