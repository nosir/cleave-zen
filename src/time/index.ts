import type { BlocksType } from '../common/types'
import {
  stripNonNumeric,
  stripDelimiters,
  getFormattedValue,
  getMaxLength,
  headStr,
} from '../common/utils'
import {
  DefaultTimeDelimiter,
  DefaultTimeFormat,
  DefaultTimePattern,
} from './constants'
import type {
  FormatTimeOptions,
  TimeFormatType,
  TimeFormatOptions,
  TimePatternType,
  GetFixedTimeStringProps,
  GetValidatedTimeProps,
  TimeUnit,
} from './types'

const getTimeFormatOptions = (
  timeFormat: TimeFormatType
): TimeFormatOptions => {
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
}: GetFixedTimeStringProps): string => {
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
}: GetValidatedTimeProps): string => {
  let result: string = ''

  const timeFormatOptions: TimeFormatOptions = getTimeFormatOptions(timeFormat)

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
  value: string,
  options?: FormatTimeOptions
): string => {
  const {
    delimiterLazyShow = false,
    delimiter = DefaultTimeDelimiter,
    timePattern = DefaultTimePattern,
    timeFormat = DefaultTimeFormat,
  } = options ?? {}
  // strip non-numeric characters
  value = stripNonNumeric(value)

  const blocks: BlocksType = getBlocksByTimePattern(timePattern)
  value = getValidatedTime({
    value,
    blocks,
    timePattern,
    timeFormat,
  })

  // strip delimiters
  value = stripDelimiters({
    value,
    delimiters: [delimiter],
  })

  // max length
  const maxLength = getMaxLength(blocks)
  value = headStr(value, maxLength)

  // calculate
  value = getFormattedValue({
    value,
    blocks,
    delimiter,
    delimiterLazyShow,
  })

  return value
}
