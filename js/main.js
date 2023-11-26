DOM.select('.btn-demos').addEventListener('click', function () {
  Animate.scrollTo(document, DOM.offset(DOM.select('.demos')).top, 500)
})

// DOM.select('.btn-try-in').addEventListener('click', function () {
//   Animate.scrollTo(
//     document,
//     DOM.offset(DOM.select('.section-playground')).top,
//     500
//   )
// })

const cleaveZen = window.cleaveZen
const {
  formatCreditCard,
  formatDate,
  formatTime,
  formatNumeral,
  formatGeneral,
  getCreditCardType,
  registerCursorTracker,
  DefaultCreditCardDelimiter,
  DefaultDateDelimiter,
  DefaultTimeDelimiter,
} = cleaveZen

// credit card
const creditCardInput = DOM.select('.input-credit-card')
const btnClear = DOM.select('.btn-clear')

let selectedCardIcon = null
btnClear.addEventListener('click', function () {
  creditCardInput.value = ''
  if (selectedCardIcon) {
    DOM.removeClass(selectedCardIcon, 'active')
  }

  DOM.addClass(btnClear, 'hidden-right')
  creditCardInput.focus()
})

registerCursorTracker({
  input: creditCardInput,
  delimiter: DefaultCreditCardDelimiter,
})
creditCardInput.addEventListener('focus', function () {
  DOM.removeClass(btnClear, 'hidden-right')
})
creditCardInput.addEventListener('input', (e) => {
  const value = e.target.value
  creditCardInput.value = formatCreditCard(value)

  if (selectedCardIcon) {
    DOM.removeClass(selectedCardIcon, 'active')
  }
  const type = getCreditCardType(value)
  selectedCardIcon = DOM.select('.icon-' + type)
  if (selectedCardIcon) {
    DOM.addClass(selectedCardIcon, 'active')
  }
})

// date
const dateAInput = DOM.select('.input-date-a')
registerCursorTracker({
  input: dateAInput,
  delimiter: '-',
})
dateAInput.addEventListener('input', (e) => {
  dateAInput.value = formatDate(e.target.value, {
    delimiter: '-',
    datePattern: ['Y', 'm', 'd'],
  })
})

const dateBInput = DOM.select('.input-date-b')
registerCursorTracker({
  input: dateBInput,
  delimiter: DefaultDateDelimiter,
})
dateBInput.addEventListener('input', (e) => {
  dateBInput.value = formatDate(e.target.value, {
    datePattern: ['m', 'y'],
  })
})

// time
const timeAInput = DOM.select('.input-time-a')
registerCursorTracker({
  input: timeAInput,
  delimiter: DefaultTimeDelimiter,
})
timeAInput.addEventListener('input', (e) => {
  timeAInput.value = formatTime(e.target.value, {
    timePattern: ['h', 'm', 's'],
  })
})

const timeBInput = DOM.select('.input-time-b')
registerCursorTracker({
  input: timeBInput,
  delimiter: DefaultTimeDelimiter,
})
timeBInput.addEventListener('input', (e) => {
  timeBInput.value = formatTime(e.target.value, {
    timePattern: ['h', 'm'],
  })
})

// numeral
let numeralThousandsGroupStyle = 'thousand'
const selectNumeral = DOM.select('.numeral-selector .select-box')
const selectNumeralCoverTitle = DOM.select(
  '.numeral-selector .select-cover .title'
)
const codeNumeral = DOM.select('.code-numeral')
const inputNumeral = DOM.select('.input-numeral')
registerCursorTracker({
  input: inputNumeral,
  delimiters: [',', '.'],
})
inputNumeral.addEventListener('input', (e) => {
  inputNumeral.value = formatNumeral(e.target.value, {
    numeralThousandsGroupStyle,
  })
})

selectNumeral.addEventListener('change', function () {
  numeralThousandsGroupStyle = this.value

  DOM.html(selectNumeralCoverTitle, 'Style: ' + this.value)
  DOM.html(
    codeNumeral,
    DOM.html(codeNumeral).replace(
      /(<span class="code-grouping-style">(wan|thousand|lakh)<\/span>)|(thousand)/g,
      '<span class="code-grouping-style">' + this.value + '</span>'
    )
  )
  inputNumeral.focus()
  inputNumeral.value = ''
})

// blocks
const blocksInput = DOM.select('.input-blocks')
registerCursorTracker({
  input: blocksInput,
  delimiter: ' ',
})
blocksInput.addEventListener('input', (e) => {
  blocksInput.value = formatGeneral(e.target.value, {
    blocks: [4, 3, 3, 4],
    uppercase: true,
    delimiter: ' ',
  })
})

// delimiter
const delimiterInput = DOM.select('.input-delimiter')
registerCursorTracker({
  input: delimiterInput,
  delimiter: '·',
})
delimiterInput.addEventListener('input', (e) => {
  delimiterInput.value = formatGeneral(e.target.value, {
    blocks: [3, 3, 3],
    uppercase: true,
    delimiter: '·',
  })
})

// delimiters
const delimitersInput = DOM.select('.input-delimiters')
registerCursorTracker({
  input: delimitersInput,
  delimiters: ['.', '-'],
})
delimitersInput.addEventListener('input', (e) => {
  delimitersInput.value = formatGeneral(e.target.value, {
    delimiters: ['.', '.', '-'],
    uppercase: true,
    blocks: [3, 3, 3, 2],
  })
})

// prefix
const prefixInput = DOM.select('.input-prefix')
const prefixOption = {
  uppercase: true,
  prefix: 'PREFIX',
  blocks: [6, 4, 4, 4],
  delimiter: '-',
}
registerCursorTracker({
  input: prefixInput,
  delimiter: '-',
})
prefixInput.value = formatGeneral('', prefixOption)
prefixInput.addEventListener('input', (e) => {
  prefixInput.value = formatGeneral(e.target.value, prefixOption)
})
