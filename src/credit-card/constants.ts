import type { DelimiterType } from '../common/types'
import type { CreditCardBlocksType, CreditCardRegexType } from './types'

export const DefaultCreditCardDelimiter: DelimiterType = ' '

export enum CreditCardTypes {
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
  [CreditCardTypes.UATP]: [4, 5, 6],
  [CreditCardTypes.AMEX]: [4, 6, 5],
  [CreditCardTypes.DINERS]: [4, 6, 4],
  [CreditCardTypes.DISCOVER]: [4, 4, 4, 4],
  [CreditCardTypes.MASTERCARD]: [4, 4, 4, 4],
  [CreditCardTypes.DANKORT]: [4, 4, 4, 4],
  [CreditCardTypes.INSTAPAYMENT]: [4, 4, 4, 4],
  [CreditCardTypes.JCB15]: [4, 6, 5],
  [CreditCardTypes.JCB]: [4, 4, 4, 4],
  [CreditCardTypes.MAESTRO]: [4, 4, 4, 4],
  [CreditCardTypes.VISA]: [4, 4, 4, 4],
  [CreditCardTypes.MIR]: [4, 4, 4, 4],
  [CreditCardTypes.UNIONPAY]: [4, 4, 4, 4],
  [CreditCardTypes.GENERAL]: [4, 4, 4, 4],
}

export const CreditCardRegex: CreditCardRegexType = {
  // starts with 1; 15 digits, not starts with 1800 (jcb card)
  [CreditCardTypes.UATP]: /^(?!1800)1\d{0,14}/,

  // starts with 34/37; 15 digits
  [CreditCardTypes.AMEX]: /^3[47]\d{0,13}/,

  // starts with 6011/65/644-649; 16 digits
  [CreditCardTypes.DISCOVER]: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,

  // starts with 300-305/309 or 36/38/39; 14 digits
  [CreditCardTypes.DINERS]: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,

  // starts with 51-55/2221–2720; 16 digits
  [CreditCardTypes.MASTERCARD]:
    /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,

  // starts with 5019/4175/4571; 16 digits
  [CreditCardTypes.DANKORT]: /^(5019|4175|4571)\d{0,12}/,

  // starts with 637-639; 16 digits
  [CreditCardTypes.INSTAPAYMENT]: /^63[7-9]\d{0,13}/,

  // starts with 2131/1800; 15 digits
  [CreditCardTypes.JCB15]: /^(?:2131|1800)\d{0,11}/,

  // starts with 2131/1800/35; 16 digits
  [CreditCardTypes.JCB]: /^(?:35\d{0,2})\d{0,12}/,

  // starts with 50/56-58/6304/67; 16 digits
  [CreditCardTypes.MAESTRO]: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,

  // starts with 22; 16 digits
  [CreditCardTypes.MIR]: /^220[0-4]\d{0,12}/,

  // starts with 4; 16 digits
  [CreditCardTypes.VISA]: /^4\d{0,15}/,

  // starts with 62/81; 16 digits
  [CreditCardTypes.UNIONPAY]: /^(62|81)\d{0,14}/,
}
