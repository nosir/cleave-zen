import type { BlocksType, DelimiterType } from '../common/types'
import {
  getFormattedValue,
  getMaxLength,
  headStr,
  stripDelimiters,
  stripNonNumeric,
} from '../common/utils'
import {
  CreditCardBlocks,
  CreditCardRegex,
  CreditCardType,
  DefaultCreditCardDelimiter,
} from './constants'
import type {
  CreditCardInfoProps,
  FormatCreditCardOptions,
  GetCreditCardInfoProps,
  CreditCardExcludeGeneralType,
} from './types'

const getStrictBlocks = (blocks: BlocksType): BlocksType => {
  const total: number = blocks.reduce(
    (prev: number, current: number) => prev + current,
    0
  )

  return blocks.concat(19 - total)
}

const getCreditCardInfo = ({
  value,
  strictMode,
}: GetCreditCardInfoProps): CreditCardInfoProps => {
  // Some credit card can have up to 19 digits number.
  // Set strictMode to true will remove the 16 max-length restrain,
  // however, I never found any website validate card number like
  // this, hence probably you don't want to enable this option.
  for (const key of Object.keys(CreditCardRegex) as Array<
    CreditCardExcludeGeneralType<CreditCardType>
  >) {
    if (CreditCardRegex[key].test(value)) {
      const matchedBlocks: BlocksType = CreditCardBlocks[key]
      return {
        type: key,
        blocks:
          strictMode ?? false ? getStrictBlocks(matchedBlocks) : matchedBlocks,
      }
    }
  }

  return {
    type: CreditCardType.GENERAL,
    blocks:
      strictMode ?? false
        ? getStrictBlocks(CreditCardBlocks.general)
        : CreditCardBlocks.general,
  }
}

export const formatCreditCard = (
  value: string,
  options?: FormatCreditCardOptions
): string => {
  const {
    delimiter = DefaultCreditCardDelimiter,
    delimiterLazyShow = false,
    strictMode = false,
  } = options ?? {}

  // strip non-numeric characters
  value = stripNonNumeric(value)

  // strip delimiters
  value = stripDelimiters({
    value,
    delimiters: [delimiter],
  })

  const { blocks }: CreditCardInfoProps = getCreditCardInfo({
    value,
    strictMode,
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

export const getCreditCardType = (
  value: string,
  delimiter?: DelimiterType
): CreditCardType => {
  // strip non-numeric characters
  value = stripNonNumeric(value)
  // strip delimiters
  value = stripDelimiters({
    value,
    delimiters: [delimiter ?? DefaultCreditCardDelimiter],
  })

  const { type }: CreditCardInfoProps = getCreditCardInfo({ value })
  return type
}

export const unformatCreditCard = (value: string): string =>
  stripNonNumeric(value)
