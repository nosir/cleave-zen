import type { DelimiterType } from '../common/types'
import type { TimeFormatType, TimeUnit } from './types'

export const DefaultTimeFormat: TimeFormatType = '24'
export const DefaultTimeDelimiter: DelimiterType = ':'
export const DefaultTimePattern: TimeUnit[] = ['h', 'm', 's']
