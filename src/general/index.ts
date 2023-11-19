import type { FormatResultType } from '../common/types'
import {
  getFormattedValue,
  stripDelimiters,
  stripNonNumeric,
} from '../common/utils'
import type {
  FormatGeneralOptionsType,
  GetPrefixStrippedValuePropsType,
} from './types'

// strip prefix
const stripPrefix = ({
  value,
  prefix,
  tailPrefix,
}: GetPrefixStrippedValuePropsType): string => {
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
  props: FormatGeneralOptionsType
): FormatResultType => {
  const {
    value,
    blocks,
    delimiter = '',
    delimiters = [],
    delimiterLazyShow = false,
    prefix = '',
    numericOnly = false,
    uppercase = false,
    lowercase = false,
  } = props

  const tailPrefix: boolean = false // This is too buggy to be true
  let result: string = value

  // strip delimiters
  result = stripDelimiters({
    value: result,
    delimiter,
    delimiters,
  })

  // strip prefix
  result = stripPrefix({
    value: result,
    prefix,
    tailPrefix,
  })

  // strip non-numeric characters
  result = numericOnly ? stripNonNumeric(result) : result

  // convert case
  result = uppercase ? result.toUpperCase() : result
  result = lowercase ? result.toLowerCase() : result

  // prevent from showing prefix when no immediate option enabled with empty input value
  if (prefix.length > 0) {
    if (tailPrefix) {
      result = result + prefix
    } else {
      result = prefix + result
    }
  }

  // apply blocks
  result = getFormattedValue({
    value: result,
    blocks,
    delimiter,
    delimiters,
    delimiterLazyShow,
  })

  return { value: result }
}
