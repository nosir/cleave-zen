import { registerCursorTracker } from './cursor-tracker'
import type { RegisterCursorTrackerPropsType } from './cursor-tracker/types'

import { formatCreditCard } from './credit-card'
import { DefaultCreditCardDelimiter } from './credit-card/constants'
import type {
  FormatCreditCardOptionsType,
  FormatCreditCardResultType,
} from './credit-card/types'

import { formatDate } from './date'
import { DefaultDateDelimiter } from './date/constants'
import type { FormatDateResultType, FormatDateOptionsType } from './date/types'

import { formatTime } from './time'
import { DefaultTimeDelimiter } from './time/constants'
import type { FormatTimeOptionsType, FormatTimeResultType } from './time/types'

export {
  // cursor tracker
  registerCursorTracker,
  type RegisterCursorTrackerPropsType,

  // credit card
  formatCreditCard,
  DefaultCreditCardDelimiter,
  type FormatCreditCardOptionsType,
  type FormatCreditCardResultType,

  // date
  formatDate,
  DefaultDateDelimiter,
  type FormatDateOptionsType,
  type FormatDateResultType,

  // time
  formatTime,
  DefaultTimeDelimiter,
  type FormatTimeOptionsType,
  type FormatTimeResultType,
}
