import { registerCursorTracker } from './cursor-tracker'
import type { RegisterCursorTrackerPropsType } from './cursor-tracker/types'

import type {
  DelimiterType,
  BlocksType,
  RequireExactlyOne,
} from './common/types'

import { formatGeneral } from './general'
import type { FormatGeneralOptions } from './general/types'

import type { CreditCardType } from './credit-card/constants'
import type { FormatCreditCardOptions } from './credit-card/types'
import { DefaultCreditCardDelimiter } from './credit-card/constants'
import { formatCreditCard, getCreditCardType } from './credit-card'

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

export type {
  // cursor tracker
  RegisterCursorTrackerPropsType,

  // general
  DelimiterType,
  BlocksType,
  RequireExactlyOne,
  FormatGeneralOptions,

  // credit card
  CreditCardType,
  FormatCreditCardOptions,

  // numeral
  FormatNumeralOptions,

  // date
  DateUnit,
  DatePatternType,
  FormatDateOptions,

  // time
  TimeUnit,
  FormatTimeOptions,
  TimeFormatType,
  TimePatternType,
}

export {
  // cursor tracker
  registerCursorTracker,

  // general
  formatGeneral,

  // credit card
  formatCreditCard,
  getCreditCardType,
  DefaultCreditCardDelimiter,

  // numeral
  formatNumeral,
  NumeralThousandGroupStyles,
  DefaultNumeralDelimiter,

  // date
  formatDate,
  DefaultDateDelimiter,

  // time
  formatTime,
  DefaultTimeDelimiter,
}
