import type { DelimiterType } from '../common/types'
import { stripDelimiters } from '../common/utils'
import type {
  CalculeteCleanCursorIndexProps,
  CalculeteDirtyCursorIndexProps,
  RegisterCursorTrackerPropsType,
  CursorTrackerInputElement,
} from './types'

const calculeteCleanCursorIndex = ({
  value,
  dirtyCursorIndex,
  delimiters,
}: CalculeteCleanCursorIndexProps): number => {
  let index: number = dirtyCursorIndex
  for (let charIndex = 0; charIndex < dirtyCursorIndex; charIndex++) {
    if (delimiters.includes(value[charIndex])) {
      index--
    }
  }
  return index
}

const calculeteDirtyCursorIndex = ({
  value,
  cleanCursorIndex,
  delimiters,
}: CalculeteDirtyCursorIndexProps): number => {
  let index: number = cleanCursorIndex
  for (let charIndex = 0; charIndex < value.length; charIndex++) {
    if (delimiters.includes(value[charIndex])) {
      index++
    }
    if (charIndex === index - 1) {
      break
    }
  }

  return index
}

export const registerCursorTracker = ({
  input,
  delimiter = '',
  delimiters = [],
  prefix = '',
}: RegisterCursorTrackerPropsType): void => {
  const cursorTrackerDelimiters: DelimiterType[] = [delimiter, ...delimiters]

  const cursorTrackerInput: CursorTrackerInputElement =
    input as CursorTrackerInputElement

  if (cursorTrackerInput.CLEAVE_ZEN_registered ?? false) {
    return
  }

  cursorTrackerInput.CLEAVE_ZEN_registered = true

  cursorTrackerInput.addEventListener('input', e => {
    const isBackward = (e as InputEvent).inputType === 'deleteContentBackward'

    const element: CursorTrackerInputElement =
      e.target as CursorTrackerInputElement

    // if typing from the end but not backward, do nothing
    if (!isBackward && element.value.length === element.selectionEnd) {
      return
    }

    element.CLEAVE_ZEN_cleanCursorIndex = calculeteCleanCursorIndex({
      value: element.value,
      dirtyCursorIndex: element.selectionEnd ?? 0,
      delimiters: cursorTrackerDelimiters,
    })

    setTimeout(() => {
      // if current value is only to add the delimiter after prefix, do nothing
      if (
        stripDelimiters({
          value: element.value,
          delimiters: cursorTrackerDelimiters,
        }) === prefix
      ) {
        return
      }

      const dirtyCursorIndex = calculeteDirtyCursorIndex({
        value: element.value,
        cleanCursorIndex: element.CLEAVE_ZEN_cleanCursorIndex ?? 0,
        delimiters: cursorTrackerDelimiters,
      })
      element.setSelectionRange(dirtyCursorIndex, dirtyCursorIndex)
    }, 0)
  })
}
