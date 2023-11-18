import type { DelimiterType, RequireExactlyOne } from '../common/types'

export type RegisterCursorTrackerPropsType = {
  input: HTMLInputElement
} & RequireExactlyOne<
  {
    delimiter: DelimiterType
    delimiters: DelimiterType[]
  },
  'delimiter' | 'delimiters'
>

interface CommonCalculateCursorIndexPropsType {
  value: string
  delimiters: DelimiterType[]
}

export interface CalculeteDirtyCursorIndexPropsType
  extends CommonCalculateCursorIndexPropsType {
  cleanCursorIndex: number
}

export interface CalculeteCleanCursorIndexPropsType
  extends CommonCalculateCursorIndexPropsType {
  dirtyCursorIndex: number
}

// Manipulate DOM Element to add this props, so prefix is required.
export interface CursorTrackerInputElement extends HTMLInputElement {
  CLEAVE_ZEN_cleanCursorIndex?: number
  CLEAVE_ZEN_registered?: boolean
}
