import type { BlocksType, DelimiterType } from '../common/types'

export interface FormatGeneralOptions {
  blocks: BlocksType
  delimiterLazyShow?: boolean
  delimiter?: DelimiterType
  delimiters?: DelimiterType[]
  prefix?: string
  numericOnly?: boolean
  uppercase?: boolean
  lowercase?: boolean
}

export interface GetPrefixStrippedValueProps {
  value: string
  prefix: string
  tailPrefix: boolean
}
