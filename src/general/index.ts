import {
  getFormattedValue,
  stripDelimiters,
  stripNonNumeric,
} from '../common/utils'
import type { FormatGeneralOptions, GetPrefixStrippedValueProps } from './types'

// strip prefix
const stripPrefix = ({
  value,
  prefix,
  tailPrefix,
}: GetPrefixStrippedValueProps): string => {
  const prefixLength: number = prefix.length

  // No prefix
  if (prefixLength === 0) {
    return value
  }

  // Value is prefix
  if (value === prefix && value !== '') {
    return ''
  }

  // result prefix string does not match pre-defined prefix
  if (value.slice(0, prefixLength) !== prefix && !tailPrefix) {
    return ''
  } else if (value.slice(-prefixLength) !== prefix && tailPrefix) {
    return ''
  }

  // No issue, strip prefix for new value
  return tailPrefix ? value.slice(0, -prefixLength) : value.slice(prefixLength)
}

export const formatGeneral = (
  value: string,
  options: FormatGeneralOptions
): string => {
  const {
    blocks,
    delimiter = '',
    delimiters = [],
    delimiterLazyShow = false,
    prefix = '',
    numericOnly = false,
    uppercase = false,
    lowercase = false,
  } = options

  const tailPrefix: boolean = false // This is too buggy to be true

  if (delimiter.length > 0) {
    delimiters.push(delimiter)
  }

  // strip delimiters
  value = stripDelimiters({
    value,
    delimiters,
  })

  // strip prefix
  value = stripPrefix({
    value,
    prefix,
    tailPrefix,
  })

  // strip non-numeric characters
  value = numericOnly ? stripNonNumeric(value) : value

  // convert case
  value = uppercase ? value.toUpperCase() : value
  value = lowercase ? value.toLowerCase() : value

  // prevent from showing prefix when no immediate option enabled with empty input value
  if (prefix.length > 0) {
    if (tailPrefix) {
      value = value + prefix
    } else {
      value = prefix + value
    }
  }

  // apply blocks
  value = getFormattedValue({
    value,
    blocks,
    delimiter,
    delimiters,
    delimiterLazyShow,
  })

  return value
}

export const unformatGeneral = (
  value: string,
  options: Pick<FormatGeneralOptions, 'delimiter' | 'delimiters'>
): string => {
  const { delimiter = '', delimiters = [] } = options
  return stripDelimiters({ value, delimiters: [...delimiters, delimiter] })
}
