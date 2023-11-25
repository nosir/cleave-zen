import type { BlocksType } from '../common/types'
import type { CreditCardTypes } from './constants'

export type CreditCardBlocksType = Record<CreditCardTypes, BlocksType>
export type CreditCardRegexType = Record<
  CreditCardExcludeGeneralType<CreditCardTypes>,
  RegExp
>

export type CreditCardExcludeGeneralType<T> = T extends CreditCardTypes.GENERAL
  ? never
  : T

export interface GetCreditCardInfoProps {
  value: string
  strictMode?: boolean
}
export interface CreditCardInfoProps {
  type: CreditCardTypes
  blocks: BlocksType
}

export interface FormatCreditCardOptions {
  delimiter?: string
  strictMode?: boolean
  delimiterLazyShow?: boolean
}
