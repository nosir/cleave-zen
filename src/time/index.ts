import type { BlocksType, FormatResultType } from '../common/types'
import {
  stripNonNumeric,
  stripDelimiters,
  getFormattedValue,
  getMaxLength,
  headStr,
  isString,
} from '../common/utils'
import {
  DefaultTimeDelimiter,
  DefaultTimeFormat,
  DefaultTimePattern,
} from './constants'
import type {
  FormatTimeOptionsType,
  TimeFormatType,
  TimeFormatOptionsType,
  TimePatternType,
  GetFixedTimeStringPropsType,
  GetValidatedTimePropsType,
  TimeUnit,
} from './types'

const getTimeFormatOptions = (
  timeFormat: TimeFormatType
): TimeFormatOptionsType => {
  if (timeFormat === '12') {
    return {
      maxHourFirstDigit: 1,
      maxHours: 12,
      maxMinutesFirstDigit: 5,
      maxMinutes: 60,
    }
  }

  return {
    maxHourFirstDigit: 2,
    maxHours: 23,
    maxMinutesFirstDigit: 5,
    maxMinutes: 60,
  }
}

const addLeadingZero = (number: number): string =>
  (number < 10 ? '0' : '') + number

const getBlocksByTimePattern = (timePattern: TimePatternType): BlocksType => {
  const blocks: BlocksType = []
  timePattern.forEach(() => {
    blocks.push(2)
  })
  return blocks
}

const getFixedTime = (
  hour: number,
  minute: number,
  second: number
): number[] => {
  second = Math.min(second, 60)
  minute = Math.min(minute, 60)
  hour = Math.min(hour, 60)

  return [hour, minute, second]
}

const getFixedTimeString = ({
  value,
  timePattern,
}: GetFixedTimeStringPropsType): string => {
  let time: number[] = []
  let secondIndex = 0
  let minuteIndex = 0
  let hourIndex = 0
  let secondStartIndex = 0
  let minuteStartIndex = 0
  let hourStartIndex = 0
  let second
  let minute
  let hour

  if (value.length === 6) {
    timePattern.forEach((type, index) => {
      switch (type) {
        case 's':
          secondIndex = index * 2
          break
        case 'm':
          minuteIndex = index * 2
          break
        case 'h':
          hourIndex = index * 2
          break
      }
    })

    hourStartIndex = hourIndex
    minuteStartIndex = minuteIndex
    secondStartIndex = secondIndex

    second = parseInt(value.slice(secondStartIndex, secondStartIndex + 2), 10)
    minute = parseInt(value.slice(minuteStartIndex, minuteStartIndex + 2), 10)
    hour = parseInt(value.slice(hourStartIndex, hourStartIndex + 2), 10)

    time = getFixedTime(hour, minute, second)
  }

  if (value.length === 4 && !timePattern.includes('s')) {
    timePattern.forEach((type: TimeUnit, index: number) => {
      switch (type) {
        case 'm':
          minuteIndex = index * 2
          break
        case 'h':
          hourIndex = index * 2
          break
      }
    })

    hourStartIndex = hourIndex
    minuteStartIndex = minuteIndex

    second = 0
    minute = parseInt(value.slice(minuteStartIndex, minuteStartIndex + 2), 10)
    hour = parseInt(value.slice(hourStartIndex, hourStartIndex + 2), 10)

    time = getFixedTime(hour, minute, second)
  }

  return time.length === 0
    ? value
    : timePattern.reduce((previous: string, current: TimeUnit): string => {
        switch (current) {
          case 's':
            return previous + addLeadingZero(time[2])
          case 'm':
            return previous + addLeadingZero(time[1])
          case 'h':
            return previous + addLeadingZero(time[0])
        }
        return previous
      }, '')
}

const getValidatedTime = ({
  value,
  blocks,
  timePattern,
  timeFormat,
}: GetValidatedTimePropsType): string => {
  let result: string = ''

  const timeFormatOptions: TimeFormatOptionsType =
    getTimeFormatOptions(timeFormat)

  blocks.forEach((length: number, index: number) => {
    if (value.length > 0) {
      let sub = value.slice(0, length)
      const sub0 = sub.slice(0, 1)
      const rest = value.slice(length)

      switch (timePattern[index]) {
        case 'h':
          if (parseInt(sub0, 10) > timeFormatOptions.maxHourFirstDigit) {
            sub = '0' + sub0
          } else if (parseInt(sub, 10) > timeFormatOptions.maxHours) {
            sub = timeFormatOptions.maxHours + ''
          }

          break
        case 'm':
        case 's':
          if (parseInt(sub0, 10) > timeFormatOptions.maxMinutesFirstDigit) {
            sub = '0' + sub0
          } else if (parseInt(sub, 10) > timeFormatOptions.maxMinutes) {
            sub = timeFormatOptions.maxMinutes + ''
          }
          break
      }

      result += sub

      // update remaining string
      value = rest
    }
  })

  return getFixedTimeString({ value: result, timePattern })
}

export const formatTime = (
  props: FormatTimeOptionsType | string
): FormatResultType => {
  const options: FormatTimeOptionsType = isString(props)
    ? { value: props }
    : props

  const {
    value,
    delimiterLazyShow = false,
    delimiter = DefaultTimeDelimiter,
    timePattern = DefaultTimePattern,
    timeFormat = DefaultTimeFormat,
  } = options

  let result: string = value

  // strip non-numeric characters
  result = stripNonNumeric(result)

  const blocks: BlocksType = getBlocksByTimePattern(timePattern)
  result = getValidatedTime({
    value: result,
    blocks,
    timePattern,
    timeFormat,
  })

  // strip delimiters
  result = stripDelimiters({
    value: result,
    delimiter,
    delimiters: [],
  })

  // max length
  const maxLength = getMaxLength(blocks)
  result = headStr(result, maxLength)

  // calculate
  result = getFormattedValue({
    value: result,
    blocks,
    delimiter,
    delimiterLazyShow,
  })

  return { value: result }
}
