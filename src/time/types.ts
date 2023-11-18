import type { BlocksType, DelimiterType } from '../common/types'

export type TimeUnit = 'h' | 'm' | 's'
export type TimePatternType = TimeUnit[]
export type TimeFormatType = '12' | '24'

export interface FormatTimeOptionsType {
  value: string
  delimiterLazyShow?: boolean
  delimiter?: DelimiterType
  timePattern?: TimePatternType
  timeFormat?: TimeFormatType
}

export interface TimeFormatOptionsType {
  maxHourFirstDigit: number
  maxHours: number
  maxMinutesFirstDigit: number
  maxMinutes: number
}

export interface GetValidatedTimePropsType {
  value: string
  blocks: BlocksType
  timePattern: TimePatternType
  timeFormat: TimeFormatType
}

export interface GetFixedTimeStringPropsType {
  value: string
  timePattern: TimePatternType
}
