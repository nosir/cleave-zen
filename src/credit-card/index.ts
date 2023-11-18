import type { BlocksType } from '../common/types'
import {
  getFormattedValue,
  getMaxLength,
  headStr,
  isString,
  stripDelimiters,
  stripNonNumeric,
} from '../common/utils'
import {
  CreditCardBlocks,
  CreditCardRegex,
  CreditCardTypes,
  DefaultCreditCardDelimiter,
} from './constants'
import type {
  CreditCardInfoType,
  FormatCreditCardOptionsType,
  FormatCreditCardResultType,
  GetCreditCardInfoPropsType,
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
}: GetCreditCardInfoPropsType): CreditCardInfoType => {
  // Some credit card can have up to 19 digits number.
  // Set strictMode to true will remove the 16 max-length restrain,
  // however, I never found any website validate card number like
  // this, hence probably you don't want to enable this option.
  for (const key of Object.keys(CreditCardRegex) as Array<
    CreditCardExcludeGeneralType<CreditCardTypes>
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
    type: CreditCardTypes.GENERAL,
    blocks:
      strictMode ?? false
        ? getStrictBlocks(CreditCardBlocks.general)
        : CreditCardBlocks.general,
  }
}

export const formatCreditCard = (
  props: FormatCreditCardOptionsType | string
): FormatCreditCardResultType => {
  const options: FormatCreditCardOptionsType = isString(props)
    ? { value: props }
    : props

  const {
    value,
    delimiter = DefaultCreditCardDelimiter,
    delimiterLazyShow = false,
    strictMode = false,
  } = options

  let result: string = value

  // strip non-numeric characters
  result = stripNonNumeric(result)

  // strip delimiters
  result = stripDelimiters({
    value: result,
    delimiter,
    delimiters: [],
  })

  const { blocks, type }: CreditCardInfoType = getCreditCardInfo({
    value: result,
    strictMode,
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

  return { value: result, type }
}
