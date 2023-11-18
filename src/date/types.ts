import type { BlocksType, DelimiterType } from '../common/types'

export type DateUnit = 'Y' | 'y' | 'm' | 'd'
export type DatePatternType = DateUnit[]

export interface FormatDateOptionsType {
  value: string
  delimiterLazyShow?: boolean
  delimiter?: DelimiterType
  datePattern?: DatePatternType
  dateMin?: string
  dateMax?: string
}

export interface InitDateRangeReturnType {
  min: number[]
  max: number[]
}

export interface DateCalculateOptionsType extends InitDateRangeReturnType {
  date?: number[]
  value?: string
  blocks?: BlocksType
  datePattern: DatePatternType
}
