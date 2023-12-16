import type { DelimiterType, RequireExactlyOne } from '../common/types'

export type CursorTrackerDestructor = () => void

export type RegisterCursorTrackerPropsType = {
  input: HTMLInputElement
  prefix?: string
} & RequireExactlyOne<
  {
    delimiter: DelimiterType
    delimiters: DelimiterType[]
  },
  'delimiter' | 'delimiters'
>

interface CommonCalculateCursorIndexProps {
  value: string
  delimiters: DelimiterType[]
}

export interface CalculeteDirtyCursorIndexProps
  extends CommonCalculateCursorIndexProps {
  cleanCursorIndex: number
}

export interface CalculeteCleanCursorIndexProps
  extends CommonCalculateCursorIndexProps {
  dirtyCursorIndex: number
}

// Manipulate DOM Element to add this props, so prefix is required.
export interface CursorTrackerInputElement extends HTMLInputElement {
  CLEAVE_ZEN_cleanCursorIndex?: number
  CLEAVE_ZEN_cursor_tracker?: any
}
