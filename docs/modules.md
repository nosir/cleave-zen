[cleave-zen](README.md) / Exports

# cleave-zen

## Table of contents

### Enumerations

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

- [RegisterCursorTrackerPropsType](modules.md#registercursortrackerpropstype)

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

### RegisterCursorTrackerPropsType

Ƭ **RegisterCursorTrackerPropsType**: \{ `input`: `HTMLInputElement` ; `prefix?`: `string`  } & `RequireExactlyOne`\<\{ `delimiter`: `DelimiterType` ; `delimiters`: `DelimiterType`[]  }, ``"delimiter"`` \| ``"delimiters"``\>

#### Defined in

[cursor-tracker/types.ts:3](https://github.com/nosir/cleave-zen/blob/c5b793a/src/cursor-tracker/types.ts#L3)

## Variables

### DefaultCreditCardDelimiter

• `Const` **DefaultCreditCardDelimiter**: `DelimiterType` = `' '`

#### Defined in

[credit-card/constants.ts:4](https://github.com/nosir/cleave-zen/blob/c5b793a/src/credit-card/constants.ts#L4)

___

### DefaultDateDelimiter

• `Const` **DefaultDateDelimiter**: `DelimiterType` = `'/'`

#### Defined in

[date/constants.ts:4](https://github.com/nosir/cleave-zen/blob/c5b793a/src/date/constants.ts#L4)

___

### DefaultNumeralDelimiter

• `Const` **DefaultNumeralDelimiter**: `DelimiterType` = `','`

#### Defined in

[numeral/constants.ts:12](https://github.com/nosir/cleave-zen/blob/c5b793a/src/numeral/constants.ts#L12)

___

### DefaultTimeDelimiter

• `Const` **DefaultTimeDelimiter**: `DelimiterType` = `':'`

#### Defined in

[time/constants.ts:5](https://github.com/nosir/cleave-zen/blob/c5b793a/src/time/constants.ts#L5)

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

[credit-card/index.ts:63](https://github.com/nosir/cleave-zen/blob/c5b793a/src/credit-card/index.ts#L63)

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

[date/index.ts:289](https://github.com/nosir/cleave-zen/blob/c5b793a/src/date/index.ts#L289)

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

[general/index.ts:41](https://github.com/nosir/cleave-zen/blob/c5b793a/src/general/index.ts#L41)

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

[numeral/index.ts:117](https://github.com/nosir/cleave-zen/blob/c5b793a/src/numeral/index.ts#L117)

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

[time/index.ts:192](https://github.com/nosir/cleave-zen/blob/c5b793a/src/time/index.ts#L192)

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

[cursor-tracker/index.ts:42](https://github.com/nosir/cleave-zen/blob/c5b793a/src/cursor-tracker/index.ts#L42)
