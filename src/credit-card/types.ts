import type { BlocksType, FormatResultType } from '../common/types'
import type { CreditCardTypes } from './constants'

export type CreditCardBlocksType = Record<CreditCardTypes, BlocksType>
export type CreditCardRegexType = Record<
  CreditCardExcludeGeneralType<CreditCardTypes>,
  RegExp
>

export type CreditCardExcludeGeneralType<T> = T extends CreditCardTypes.GENERAL
  ? never
  : T

export interface GetCreditCardInfoPropsType {
  value: string
  strictMode?: boolean
}
export interface CreditCardInfoType {
  type: CreditCardTypes
  blocks: BlocksType
}

export interface FormatCreditCardOptionsType {
  value: string
  delimiter?: string
  strictMode?: boolean
  delimiterLazyShow?: boolean
}

export interface FormatCreditCardResultType extends FormatResultType {
  type: string
}
