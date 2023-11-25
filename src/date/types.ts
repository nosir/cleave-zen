import type { BlocksType, DelimiterType } from '../common/types'

export type DateUnit = 'Y' | 'y' | 'm' | 'd'
export type DatePatternType = DateUnit[]

export interface FormatDateOptions {
  delimiterLazyShow?: boolean
  delimiter?: DelimiterType
  datePattern?: DatePatternType
  dateMin?: string
  dateMax?: string
}

export interface InitDateRangeResults {
  min: number[]
  max: number[]
}

export interface DateCalculateOptions extends InitDateRangeResults {
  date?: number[]
  value?: string
  blocks?: BlocksType
  datePattern: DatePatternType
}
