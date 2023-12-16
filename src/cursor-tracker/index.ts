import type { DelimiterType } from '../common/types'
import { stripDelimiters } from '../common/utils'
import type {
  CalculeteCleanCursorIndexProps,
  CalculeteDirtyCursorIndexProps,
  RegisterCursorTrackerPropsType,
  CursorTrackerInputElement,
  CursorTrackerDestructor,
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
}: RegisterCursorTrackerPropsType): CursorTrackerDestructor => {
  const cursorTrackerInput: CursorTrackerInputElement =
    input as CursorTrackerInputElement

  if (cursorTrackerInput.CLEAVE_ZEN_cursor_tracker !== undefined) {
    return () => {
      cursorTrackerInput.removeEventListener(
        'input',
        cursorTrackerInput.CLEAVE_ZEN_cursor_tracker
      )
      cursorTrackerInput.CLEAVE_ZEN_cursor_tracker = undefined
    }
  }

  const cursorTrackerDelimiters: DelimiterType[] = [delimiter, ...delimiters]

  cursorTrackerInput.CLEAVE_ZEN_cursor_tracker = (e: InputEvent) => {
    const isBackward = e.inputType === 'deleteContentBackward'

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
  }

  cursorTrackerInput.addEventListener(
    'input',
    cursorTrackerInput.CLEAVE_ZEN_cursor_tracker
  )

  return () => {
    cursorTrackerInput.removeEventListener(
      'input',
      cursorTrackerInput.CLEAVE_ZEN_cursor_tracker
    )
    cursorTrackerInput.CLEAVE_ZEN_cursor_tracker = undefined
  }
}
