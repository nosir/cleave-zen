import { registerCursorTracker } from './cursor-tracker'
import type { RegisterCursorTrackerPropsType } from './cursor-tracker/types'

import type {
  DelimiterType,
  BlocksType,
  RequireExactlyOne,
} from './common/types'

import { formatGeneral } from './general'
import type { FormatGeneralOptions } from './general/types'

import { formatCreditCard, getCreditCardType } from './credit-card'
import {
  DefaultCreditCardDelimiter,
  type CreditCardTypes,
} from './credit-card/constants'
import type { FormatCreditCardOptions } from './credit-card/types'

import { formatNumeral } from './numeral'
import {
  NumeralThousandGroupStyles,
  DefaultNumeralDelimiter,
} from './numeral/constants'
import type { FormatNumeralOptions } from './numeral/types'

import { formatDate } from './date'
import { DefaultDateDelimiter } from './date/constants'
import type { FormatDateOptions, DatePatternType, DateUnit } from './date/types'

import { formatTime } from './time'
import { DefaultTimeDelimiter } from './time/constants'
import type {
  FormatTimeOptions,
  TimeFormatType,
  TimePatternType,
  TimeUnit,
} from './time/types'

export {
  type DelimiterType,
  type BlocksType,
  type RequireExactlyOne,

  // cursor tracker
  registerCursorTracker,
  type RegisterCursorTrackerPropsType,

  // general
  formatGeneral,
  type FormatGeneralOptions,

  // credit card
  formatCreditCard,
  getCreditCardType,
  DefaultCreditCardDelimiter,
  type CreditCardTypes,
  type FormatCreditCardOptions,

  // numeral
  formatNumeral,
  NumeralThousandGroupStyles,
  DefaultNumeralDelimiter,
  type FormatNumeralOptions,

  // date
  formatDate,
  DefaultDateDelimiter,
  type DateUnit,
  type DatePatternType,
  type FormatDateOptions,

  // time
  formatTime,
  DefaultTimeDelimiter,
  type TimeUnit,
  type FormatTimeOptions,
  type TimeFormatType,
  type TimePatternType,
}
