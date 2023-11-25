[cleave-zen](README.md) / Exports

# cleave-zen

## Table of contents

### Enumerations

- [CreditCardTypes](enums/CreditCardTypes.md)
- [NumeralThousandGroupStyles](enums/NumeralThousandGroupStyles.md)

### Interfaces

- [FormatCreditCardOptionsType](interfaces/FormatCreditCardOptionsType.md)
- [FormatCreditCardResultType](interfaces/FormatCreditCardResultType.md)
- [FormatDateOptionsType](interfaces/FormatDateOptionsType.md)
- [FormatGeneralOptionsType](interfaces/FormatGeneralOptionsType.md)
- [FormatNumeralOptionsType](interfaces/FormatNumeralOptionsType.md)
- [FormatResultType](interfaces/FormatResultType.md)
- [FormatTimeOptionsType](interfaces/FormatTimeOptionsType.md)

### Type Aliases

- [BlocksType](modules.md#blockstype)
- [DatePatternType](modules.md#datepatterntype)
- [DateUnit](modules.md#dateunit)
- [DelimiterType](modules.md#delimitertype)
- [RegisterCursorTrackerPropsType](modules.md#registercursortrackerpropstype)
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
- [registerCursorTracker](modules.md#registercursortracker)

## Type Aliases

### BlocksType

Ƭ **BlocksType**: `number`[]

#### Defined in

[common/types.ts:6](https://github.com/nosir/cleave-zen/blob/b26233f/src/common/types.ts#L6)

___

### DatePatternType

Ƭ **DatePatternType**: [`DateUnit`](modules.md#dateunit)[]

#### Defined in

[date/types.ts:4](https://github.com/nosir/cleave-zen/blob/b26233f/src/date/types.ts#L4)

___

### DateUnit

Ƭ **DateUnit**: ``"Y"`` \| ``"y"`` \| ``"m"`` \| ``"d"``

#### Defined in

[date/types.ts:3](https://github.com/nosir/cleave-zen/blob/b26233f/src/date/types.ts#L3)

___

### DelimiterType

Ƭ **DelimiterType**: `string`

#### Defined in

[common/types.ts:5](https://github.com/nosir/cleave-zen/blob/b26233f/src/common/types.ts#L5)

___

### RegisterCursorTrackerPropsType

Ƭ **RegisterCursorTrackerPropsType**: \{ `input`: `HTMLInputElement` ; `prefix?`: `string`  } & `RequireExactlyOne`\<\{ `delimiter`: [`DelimiterType`](modules.md#delimitertype) ; `delimiters`: [`DelimiterType`](modules.md#delimitertype)[]  }, ``"delimiter"`` \| ``"delimiters"``\>

#### Defined in

[cursor-tracker/types.ts:3](https://github.com/nosir/cleave-zen/blob/b26233f/src/cursor-tracker/types.ts#L3)

___

### TimeFormatType

Ƭ **TimeFormatType**: ``"12"`` \| ``"24"``

#### Defined in

[time/types.ts:5](https://github.com/nosir/cleave-zen/blob/b26233f/src/time/types.ts#L5)

___

### TimePatternType

Ƭ **TimePatternType**: [`TimeUnit`](modules.md#timeunit)[]

#### Defined in

[time/types.ts:4](https://github.com/nosir/cleave-zen/blob/b26233f/src/time/types.ts#L4)

___

### TimeUnit

Ƭ **TimeUnit**: ``"h"`` \| ``"m"`` \| ``"s"``

#### Defined in

[time/types.ts:3](https://github.com/nosir/cleave-zen/blob/b26233f/src/time/types.ts#L3)

## Variables

### DefaultCreditCardDelimiter

• `Const` **DefaultCreditCardDelimiter**: [`DelimiterType`](modules.md#delimitertype) = `' '`

#### Defined in

[credit-card/constants.ts:4](https://github.com/nosir/cleave-zen/blob/b26233f/src/credit-card/constants.ts#L4)

___

### DefaultDateDelimiter

• `Const` **DefaultDateDelimiter**: [`DelimiterType`](modules.md#delimitertype) = `'/'`

#### Defined in

[date/constants.ts:4](https://github.com/nosir/cleave-zen/blob/b26233f/src/date/constants.ts#L4)

___

### DefaultNumeralDelimiter

• `Const` **DefaultNumeralDelimiter**: [`DelimiterType`](modules.md#delimitertype) = `','`

#### Defined in

[numeral/constants.ts:9](https://github.com/nosir/cleave-zen/blob/b26233f/src/numeral/constants.ts#L9)

___

### DefaultTimeDelimiter

• `Const` **DefaultTimeDelimiter**: [`DelimiterType`](modules.md#delimitertype) = `':'`

#### Defined in

[time/constants.ts:5](https://github.com/nosir/cleave-zen/blob/b26233f/src/time/constants.ts#L5)

## Functions

### formatCreditCard

▸ **formatCreditCard**(`props`): [`FormatCreditCardResultType`](interfaces/FormatCreditCardResultType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `string` \| [`FormatCreditCardOptionsType`](interfaces/FormatCreditCardOptionsType.md) |

#### Returns

[`FormatCreditCardResultType`](interfaces/FormatCreditCardResultType.md)

#### Defined in

[credit-card/index.ts:63](https://github.com/nosir/cleave-zen/blob/b26233f/src/credit-card/index.ts#L63)

___

### formatDate

▸ **formatDate**(`props`): [`FormatResultType`](interfaces/FormatResultType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `string` \| [`FormatDateOptionsType`](interfaces/FormatDateOptionsType.md) |

#### Returns

[`FormatResultType`](interfaces/FormatResultType.md)

#### Defined in

[date/index.ts:289](https://github.com/nosir/cleave-zen/blob/b26233f/src/date/index.ts#L289)

___

### formatGeneral

▸ **formatGeneral**(`props`): [`FormatResultType`](interfaces/FormatResultType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FormatGeneralOptionsType`](interfaces/FormatGeneralOptionsType.md) |

#### Returns

[`FormatResultType`](interfaces/FormatResultType.md)

#### Defined in

[general/index.ts:41](https://github.com/nosir/cleave-zen/blob/b26233f/src/general/index.ts#L41)

___

### formatNumeral

▸ **formatNumeral**(`props`): [`FormatResultType`](interfaces/FormatResultType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `string` \| [`FormatNumeralOptionsType`](interfaces/FormatNumeralOptionsType.md) |

#### Returns

[`FormatResultType`](interfaces/FormatResultType.md)

#### Defined in

[numeral/index.ts:117](https://github.com/nosir/cleave-zen/blob/b26233f/src/numeral/index.ts#L117)

___

### formatTime

▸ **formatTime**(`props`): [`FormatResultType`](interfaces/FormatResultType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `string` \| [`FormatTimeOptionsType`](interfaces/FormatTimeOptionsType.md) |

#### Returns

[`FormatResultType`](interfaces/FormatResultType.md)

#### Defined in

[time/index.ts:192](https://github.com/nosir/cleave-zen/blob/b26233f/src/time/index.ts#L192)

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

[cursor-tracker/index.ts:42](https://github.com/nosir/cleave-zen/blob/b26233f/src/cursor-tracker/index.ts#L42)
