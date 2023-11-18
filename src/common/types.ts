export type RequireExactlyOne<T, Keys extends keyof T = keyof T> = {
  [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
}[Keys]

export type DelimiterType = string
export type BlocksType = number[]

export type StripDelimitersPropsType = { value: string } & RequireExactlyOne<
  {
    delimiter: DelimiterType
    delimiters: DelimiterType[]
  },
  'delimiter' | 'delimiters'
>

export interface GetFormattedValuePropsType {
  value: string
  blocks: BlocksType
  delimiter: DelimiterType
  delimiterLazyShow?: boolean
}

export interface FormatResultType {
  value: string
}
