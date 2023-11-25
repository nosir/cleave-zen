import type { BlocksType, DelimiterType } from '../common/types'

export type TimeUnit = 'h' | 'm' | 's'
export type TimePatternType = TimeUnit[]
export type TimeFormatType = '12' | '24'

export interface FormatTimeOptions {
  delimiterLazyShow?: boolean
  delimiter?: DelimiterType
  timePattern?: TimePatternType
  timeFormat?: TimeFormatType
}

export interface TimeFormatOptions {
  maxHourFirstDigit: number
  maxHours: number
  maxMinutesFirstDigit: number
  maxMinutes: number
}

export interface GetValidatedTimeProps {
  value: string
  blocks: BlocksType
  timePattern: TimePatternType
  timeFormat: TimeFormatType
}

export interface GetFixedTimeStringProps {
  value: string
  timePattern: TimePatternType
}
