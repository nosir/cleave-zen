import { registerCursorTracker } from './cursor-tracker'
import type {
  RegisterCursorTrackerPropsType,
  CursorTrackerDestructor,
} from './cursor-tracker/types'

import type {
  DelimiterType,
  BlocksType,
  RequireExactlyOne,
} from './common/types'

import { formatGeneral, unformatGeneral } from './general'
import type { FormatGeneralOptions } from './general/types'

import type { CreditCardType } from './credit-card/constants'
import type { FormatCreditCardOptions } from './credit-card/types'
import { DefaultCreditCardDelimiter } from './credit-card/constants'
import {
  formatCreditCard,
  unformatCreditCard,
  getCreditCardType,
} from './credit-card'

import { formatNumeral, unformatNumeral } from './numeral'
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
  CursorTrackerDestructor,

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
  unformatGeneral,

  // credit card
  formatCreditCard,
  unformatCreditCard,
  getCreditCardType,
  DefaultCreditCardDelimiter,

  // numeral
  formatNumeral,
  unformatNumeral,
  NumeralThousandGroupStyles,
  DefaultNumeralDelimiter,

  // date
  formatDate,
  DefaultDateDelimiter,

  // time
  formatTime,
  DefaultTimeDelimiter,
}
