import type { BlocksType } from '../common/types'
import type { CreditCardType } from './constants'

export type CreditCardBlocksType = Record<CreditCardType, BlocksType>
export type CreditCardRegexType = Record<
  CreditCardExcludeGeneralType<CreditCardType>,
  RegExp
>

export type CreditCardExcludeGeneralType<T> = T extends CreditCardType.GENERAL
  ? never
  : T

export interface GetCreditCardInfoProps {
  value: string
  strictMode?: boolean
}
export interface CreditCardInfoProps {
  type: CreditCardType
  blocks: BlocksType
}

export interface FormatCreditCardOptions {
  delimiter?: string
  strictMode?: boolean
  delimiterLazyShow?: boolean
}
