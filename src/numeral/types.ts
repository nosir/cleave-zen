import type { DelimiterType } from '../common/types'
import type { NumeralThousandGroupStyles } from './constants'

export interface FormatNumeralOptionsType {
  value: string
  delimiter?: DelimiterType
  numeralThousandsGroupStyle?: NumeralThousandGroupStyles
  numeralIntegerScale?: number
  numeralDecimalMark?: string
  numeralDecimalScale?: number
  numeralPositiveOnly?: boolean
  tailPrefix?: boolean
  stripLeadingZeroes?: boolean
  signBeforePrefix?: boolean
  prefix?: string
}

export interface FormatNumeralOptionsRequiredType {
  value: string
  delimiter: DelimiterType
  numeralThousandsGroupStyle: NumeralThousandGroupStyles
  numeralIntegerScale: number
  numeralDecimalMark: string
  numeralDecimalScale: number
  numeralPositiveOnly: boolean
  tailPrefix: boolean
  stripLeadingZeroes: boolean
  signBeforePrefix: boolean
  prefix: string
}
