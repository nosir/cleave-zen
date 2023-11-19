import type { BlocksType, DelimiterType } from '../common/types'

export interface FormatGeneralOptionsType {
  value: string
  blocks: BlocksType
  delimiterLazyShow?: boolean
  delimiter?: DelimiterType
  delimiters?: DelimiterType[]
  prefix?: string
  tailPrefix?: boolean
  numericOnly?: boolean
  uppercase?: boolean
  lowercase?: boolean
}

export interface GetPrefixStrippedValuePropsType {
  value: string
  prefix: string
  tailPrefix: boolean
}
