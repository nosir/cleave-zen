# `cleave-zen`

[![npm version](https://badge.fury.io/js/cleave-zen.svg)](https://badge.fury.io/js/cleave-zen)
[![npm downloads](https://img.shields.io/npm/dm/cleave-zen.svg)](https://www.npmjs.com/package/cleave-zen)
[![Documents](https://img.shields.io/badge/documents-check-3362c2.svg)](https://github.com/nosir/cleave-zen/blob/main/docs/modules.md)

A simple library to help you format input text content

Unlike its predecessor [cleave.js](https://github.com/nosir/cleave.js),
`cleave-zen` no longer binds to DOM input elements. It now functions as a
versatile formatting library, suitable for use in Node.js, browsers, and easier
integration with frameworks like React, Angular, and any other libraries.

## Features

- Credit card formatting
- Numeral formatting
- Date / Time formatting
- Custom delimiter, prefix and blocks pattern
- Non-intrusive: only providing the formatting methods

**TL;DR** [Demo](https://nosir.github.io/cleave-zen) |
[Usage Examples](https://github.com/nosir/cleave-zen-examples)

## Install

```sh
npm install --save cleave-zen
```

You can use it on [unpkg.com](https://unpkg.com/cleave-zen) as a CDN version

## Usage

### Basic

You have two text fields to display credit card number and type

```html
<input class="creditcard-input" type="text" />
<input class="creditcard-type" type="text" />
```

Now in your JavaScript

```js
import { formatCreditCard, getCreditCardType } from 'cleave-zen'

const creditcardInput = document.querySelector('.creditcard-input')
const creditCardType = document.querySelector('.creditcard-type')

creditcardInput.addEventListener('input', e => {
  const value = e.target.value
  creditcardInput.value = formatCreditCard(value)
  creditCardType.innerHTML = getCreditCardType(value)
})
```

### ReactJS (hook)

```js
import React, { useRef, useState } from 'react'
import { formatCreditCard, getCreditCardType } from 'cleave-zen'

const App = () => {
  const inputRef = useRef(null)
  const [value, setValue] = useState('')
  const [type, setType] = useState('')

  return (
    <>
      <input
        ref={inputRef}
        value={value}
        onChange={e => {
          const value = e.target.value
          setValue(formatCreditCard(value))
          setType(getCreditCardType(value))
        }}
      />
      <div>value: {value}</div>
      <div>type: {type}</div>
    </>
  )
}
```

### TypeScript

This lib is written by TypeScript, so if you prefer to use it that way:

```js
import { formatCreditCard, type FormatCreditCardOptions } from 'cleave-zen'

const options: FormatCreditCardOptions = { delimiter: '-' }
const value: string = formatCreditCard('5163000011112222', options)
```

### Track cursor (optional)

When you manually updating the input field with formatted value, the cursor
moves to the end of the field, which can be super annoying when you typing or
deleting letters inside the string content.

This library can fix this issue for you! Simply add `registerCursorTracker` for
the input field:

```js
import { registerCursorTracker, DefaultCreditCardDelimiter } from 'cleave-zen'

registerCursorTracker({ input: creditCardInput, delimiter: DefaultCreditCardDelimiter }})
```

And for ReactJS usage above:

```js
import { useRef, useEffect } from 'react'

...

const inputRef = useRef(null)
useEffect(() => {
    return registerCursorTracker({ input: inputRef.current, delimiter: DefaultCreditCardDelimiter })
}, [])

...
```

### All other examples

See all examples in this [repo](https://github.com/nosir/cleave-zen-examples)

## Documentation

- [API](https://github.com/nosir/cleave-zen/blob/main/docs/modules.md)

## TODO List

- [x] Create an example repo for individual lib usage case
- [ ] Create demo page for different type of formatting
- [ ] Review still related PRs and issues in the old cleave.js repo and
      implement it here
- [ ] Add unit tests
- [ ] Add docs comments for functions and usages
- [ ] Add more library integration usages in
      [example repo](https://github.com/nosir/cleave-zen-examples)
- [ ] Create legacy cleave.js phone formatter in a separate repo
