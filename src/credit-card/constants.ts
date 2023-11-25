import type { DelimiterType } from '../common/types'
import type { CreditCardBlocksType, CreditCardRegexType } from './types'

export const DefaultCreditCardDelimiter: DelimiterType = '&'

export enum CreditCardType {
  UATP = 'uatp',
  AMEX = 'amex',
  DINERS = 'diners',
  DISCOVER = 'discover',
  MASTERCARD = 'mastercard',
  DANKORT = 'dankort',
  INSTAPAYMENT = 'instapayment',
  JCB15 = 'jcb15',
  JCB = 'jcb',
  MAESTRO = 'maestro',
  VISA = 'visa',
  MIR = 'mir',
  UNIONPAY = 'unionpay',
  GENERAL = 'general',
}

export const CreditCardBlocks: CreditCardBlocksType = {
  [CreditCardType.UATP]: [4, 5, 6],
  [CreditCardType.AMEX]: [4, 6, 5],
  [CreditCardType.DINERS]: [4, 6, 4],
  [CreditCardType.DISCOVER]: [4, 4, 4, 4],
  [CreditCardType.MASTERCARD]: [4, 4, 4, 4],
  [CreditCardType.DANKORT]: [4, 4, 4, 4],
  [CreditCardType.INSTAPAYMENT]: [4, 4, 4, 4],
  [CreditCardType.JCB15]: [4, 6, 5],
  [CreditCardType.JCB]: [4, 4, 4, 4],
  [CreditCardType.MAESTRO]: [4, 4, 4, 4],
  [CreditCardType.VISA]: [4, 4, 4, 4],
  [CreditCardType.MIR]: [4, 4, 4, 4],
  [CreditCardType.UNIONPAY]: [4, 4, 4, 4],
  [CreditCardType.GENERAL]: [4, 4, 4, 4],
}

export const CreditCardRegex: CreditCardRegexType = {
  // starts with 1; 15 digits, not starts with 1800 (jcb card)
  [CreditCardType.UATP]: /^(?!1800)1\d{0,14}/,

  // starts with 34/37; 15 digits
  [CreditCardType.AMEX]: /^3[47]\d{0,13}/,

  // starts with 6011/65/644-649; 16 digits
  [CreditCardType.DISCOVER]: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,

  // starts with 300-305/309 or 36/38/39; 14 digits
  [CreditCardType.DINERS]: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,

  // starts with 51-55/2221–2720; 16 digits
  [CreditCardType.MASTERCARD]:
    /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,

  // starts with 5019/4175/4571; 16 digits
  [CreditCardType.DANKORT]: /^(5019|4175|4571)\d{0,12}/,

  // starts with 637-639; 16 digits
  [CreditCardType.INSTAPAYMENT]: /^63[7-9]\d{0,13}/,

  // starts with 2131/1800; 15 digits
  [CreditCardType.JCB15]: /^(?:2131|1800)\d{0,11}/,

  // starts with 2131/1800/35; 16 digits
  [CreditCardType.JCB]: /^(?:35\d{0,2})\d{0,12}/,

  // starts with 50/56-58/6304/67; 16 digits
  [CreditCardType.MAESTRO]: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,

  // starts with 22; 16 digits
  [CreditCardType.MIR]: /^220[0-4]\d{0,12}/,

  // starts with 4; 16 digits
  [CreditCardType.VISA]: /^4\d{0,15}/,

  // starts with 62/81; 16 digits
  [CreditCardType.UNIONPAY]: /^(62|81)\d{0,14}/,
}
