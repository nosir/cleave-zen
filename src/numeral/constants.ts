import type { DelimiterType } from '../common/types'

export enum NumeralThousandGroupStyles {
  THOUSAND = 'thousand',
  LAKH = 'lakh',
  WAN = 'wan',
  NONE = 'none',
}
export const DefaultNumeralDelimiter: DelimiterType = ','
export const DefaultNumeralDecimalMark: DelimiterType = '.'
export const DefaultNumeralThousandGroupStyle: NumeralThousandGroupStyles =
  NumeralThousandGroupStyles.THOUSAND
export const DefaultNumeralDecimalScale: number = 2
export const DefaultNumeralIntegerScale: number = 0 // no limit
