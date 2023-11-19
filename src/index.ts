import { registerCursorTracker } from './cursor-tracker'
import type { RegisterCursorTrackerPropsType } from './cursor-tracker/types'

import type { FormatResultType } from './common/types'

import { formatGeneral } from './general'
import type { FormatGeneralOptionsType } from './general/types'

import { formatCreditCard } from './credit-card'
import { DefaultCreditCardDelimiter } from './credit-card/constants'
import type {
  FormatCreditCardOptionsType,
  FormatCreditCardResultType,
} from './credit-card/types'

import { formatNumeral } from './numeral'
import {
  NumeralThousandGroupStyles,
  DefaultNumeralDelimiter,
} from './numeral/constants'
import type { FormatNumeralOptionsType } from './numeral/types'

import { formatDate } from './date'
import { DefaultDateDelimiter } from './date/constants'
import type { FormatDateOptionsType } from './date/types'

import { formatTime } from './time'
import { DefaultTimeDelimiter } from './time/constants'
import type { FormatTimeOptionsType } from './time/types'

export {
  type FormatResultType,

  // cursor tracker
  registerCursorTracker,
  type RegisterCursorTrackerPropsType,

  // general
  formatGeneral,
  type FormatGeneralOptionsType,

  // credit card
  formatCreditCard,
  DefaultCreditCardDelimiter,
  type FormatCreditCardOptionsType,
  type FormatCreditCardResultType,

  // numeral
  formatNumeral,
  NumeralThousandGroupStyles,
  DefaultNumeralDelimiter,
  type FormatNumeralOptionsType,

  // date
  formatDate,
  DefaultDateDelimiter,
  type FormatDateOptionsType,

  // time
  formatTime,
  DefaultTimeDelimiter,
  type FormatTimeOptionsType,
}
