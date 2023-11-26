[cleave-zen](README.md) / Exports

# cleave-zen

## Table of contents

### Enumerations

- [CreditCardType](enums/CreditCardType.md)
- [NumeralThousandGroupStyles](enums/NumeralThousandGroupStyles.md)

### Interfaces

- [FormatCreditCardOptions](interfaces/FormatCreditCardOptions.md)
- [FormatDateOptions](interfaces/FormatDateOptions.md)
- [FormatGeneralOptions](interfaces/FormatGeneralOptions.md)
- [FormatNumeralOptions](interfaces/FormatNumeralOptions.md)
- [FormatTimeOptions](interfaces/FormatTimeOptions.md)

### Type Aliases

- [BlocksType](modules.md#blockstype)
- [DatePatternType](modules.md#datepatterntype)
- [DateUnit](modules.md#dateunit)
- [DelimiterType](modules.md#delimitertype)
- [RegisterCursorTrackerPropsType](modules.md#registercursortrackerpropstype)
- [RequireExactlyOne](modules.md#requireexactlyone)
- [TimeFormatType](modules.md#timeformattype)
- [TimePatternType](modules.md#timepatterntype)
- [TimeUnit](modules.md#timeunit)

### Variables

- [DefaultCreditCardDelimiter](modules.md#defaultcreditcarddelimiter)
- [DefaultDateDelimiter](modules.md#defaultdatedelimiter)
- [DefaultNumeralDelimiter](modules.md#defaultnumeraldelimiter)
- [DefaultTimeDelimiter](modules.md#defaulttimedelimiter)

### Functions

- [formatCreditCard](modules.md#formatcreditcard)
- [formatDate](modules.md#formatdate)
- [formatGeneral](modules.md#formatgeneral)
- [formatNumeral](modules.md#formatnumeral)
- [formatTime](modules.md#formattime)
- [getCreditCardType](modules.md#getcreditcardtype)
- [registerCursorTracker](modules.md#registercursortracker)

## Type Aliases

### BlocksType

Ƭ **BlocksType**: `number`[]

#### Defined in

[common/types.ts:6](https://github.com/nosir/cleave-zen/blob/5c91e2a/src/common/types.ts#L6)

___

### DatePatternType

Ƭ **DatePatternType**: [`DateUnit`](modules.md#dateunit)[]

#### Defined in

[date/types.ts:4](https://github.com/nosir/cleave-zen/blob/5c91e2a/src/date/types.ts#L4)

___

### DateUnit

Ƭ **DateUnit**: ``"Y"`` \| ``"y"`` \| ``"m"`` \| ``"d"``

#### Defined in

[date/types.ts:3](https://github.com/nosir/cleave-zen/blob/5c91e2a/src/date/types.ts#L3)

___

### DelimiterType

Ƭ **DelimiterType**: `string`

#### Defined in

[common/types.ts:5](https://github.com/nosir/cleave-zen/blob/5c91e2a/src/common/types.ts#L5)

___

### RegisterCursorTrackerPropsType

Ƭ **RegisterCursorTrackerPropsType**: \{ `input`: `HTMLInputElement` ; `prefix?`: `string`  } & [`RequireExactlyOne`](modules.md#requireexactlyone)\<\{ `delimiter`: [`DelimiterType`](modules.md#delimitertype) ; `delimiters`: [`DelimiterType`](modules.md#delimitertype)[]  }, ``"delimiter"`` \| ``"delimiters"``\>

#### Defined in

[cursor-tracker/types.ts:3](https://github.com/nosir/cleave-zen/blob/5c91e2a/src/cursor-tracker/types.ts#L3)

___

### RequireExactlyOne

Ƭ **RequireExactlyOne**\<`T`, `Keys`\>: \{ [K in Keys]-?: Required\<Pick\<T, K\>\> & Partial\<Pick\<T, Exclude\<Keys, K\>\>\> }[`Keys`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Keys` | extends keyof `T` = keyof `T` |

#### Defined in

[common/types.ts:1](https://github.com/nosir/cleave-zen/blob/5c91e2a/src/common/types.ts#L1)

___

### TimeFormatType

Ƭ **TimeFormatType**: ``"12"`` \| ``"24"``

#### Defined in

[time/types.ts:5](https://github.com/nosir/cleave-zen/blob/5c91e2a/src/time/types.ts#L5)

___

### TimePatternType

Ƭ **TimePatternType**: [`TimeUnit`](modules.md#timeunit)[]

#### Defined in

[time/types.ts:4](https://github.com/nosir/cleave-zen/blob/5c91e2a/src/time/types.ts#L4)

___

### TimeUnit

Ƭ **TimeUnit**: ``"h"`` \| ``"m"`` \| ``"s"``

#### Defined in

[time/types.ts:3](https://github.com/nosir/cleave-zen/blob/5c91e2a/src/time/types.ts#L3)

## Variables

### DefaultCreditCardDelimiter

• `Const` **DefaultCreditCardDelimiter**: [`DelimiterType`](modules.md#delimitertype) = `' '`

#### Defined in

[credit-card/constants.ts:4](https://github.com/nosir/cleave-zen/blob/5c91e2a/src/credit-card/constants.ts#L4)

___

### DefaultDateDelimiter

• `Const` **DefaultDateDelimiter**: [`DelimiterType`](modules.md#delimitertype) = `'/'`

#### Defined in

[date/constants.ts:4](https://github.com/nosir/cleave-zen/blob/5c91e2a/src/date/constants.ts#L4)

___

### DefaultNumeralDelimiter

• `Const` **DefaultNumeralDelimiter**: [`DelimiterType`](modules.md#delimitertype) = `','`

#### Defined in

[numeral/constants.ts:9](https://github.com/nosir/cleave-zen/blob/5c91e2a/src/numeral/constants.ts#L9)

___

### DefaultTimeDelimiter

• `Const` **DefaultTimeDelimiter**: [`DelimiterType`](modules.md#delimitertype) = `':'`

#### Defined in

[time/constants.ts:5](https://github.com/nosir/cleave-zen/blob/5c91e2a/src/time/constants.ts#L5)

## Functions

### formatCreditCard

▸ **formatCreditCard**(`value`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `options?` | [`FormatCreditCardOptions`](interfaces/FormatCreditCardOptions.md) |

#### Returns

`string`

#### Defined in

[credit-card/index.ts:61](https://github.com/nosir/cleave-zen/blob/5c91e2a/src/credit-card/index.ts#L61)

___

### formatDate

▸ **formatDate**(`value`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `options?` | [`FormatDateOptions`](interfaces/FormatDateOptions.md) |

#### Returns

`string`

#### Defined in

[date/index.ts:288](https://github.com/nosir/cleave-zen/blob/5c91e2a/src/date/index.ts#L288)

___

### formatGeneral

▸ **formatGeneral**(`value`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `options` | [`FormatGeneralOptions`](interfaces/FormatGeneralOptions.md) |

#### Returns

`string`

#### Defined in

[general/index.ts:37](https://github.com/nosir/cleave-zen/blob/5c91e2a/src/general/index.ts#L37)

___

### formatNumeral

▸ **formatNumeral**(`value`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `options?` | [`FormatNumeralOptions`](interfaces/FormatNumeralOptions.md) |

#### Returns

`string`

#### Defined in

[numeral/index.ts:112](https://github.com/nosir/cleave-zen/blob/5c91e2a/src/numeral/index.ts#L112)

___

### formatTime

▸ **formatTime**(`value`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `options?` | [`FormatTimeOptions`](interfaces/FormatTimeOptions.md) |

#### Returns

`string`

#### Defined in

[time/index.ts:190](https://github.com/nosir/cleave-zen/blob/5c91e2a/src/time/index.ts#L190)

___

### getCreditCardType

▸ **getCreditCardType**(`value`, `delimiter?`): [`CreditCardType`](enums/CreditCardType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `delimiter?` | `string` |

#### Returns

[`CreditCardType`](enums/CreditCardType.md)

#### Defined in

[credit-card/index.ts:100](https://github.com/nosir/cleave-zen/blob/5c91e2a/src/credit-card/index.ts#L100)

___

### registerCursorTracker

▸ **registerCursorTracker**(`«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`RegisterCursorTrackerPropsType`](modules.md#registercursortrackerpropstype) |

#### Returns

`void`

#### Defined in

[cursor-tracker/index.ts:42](https://github.com/nosir/cleave-zen/blob/5c91e2a/src/cursor-tracker/index.ts#L42)
