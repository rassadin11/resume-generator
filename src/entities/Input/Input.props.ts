import {ChangeEvent, FocusEvent, HTMLAttributes} from 'react'
import {FormItem} from '../../features/Form/FormData'

export interface InputProps extends HTMLAttributes<HTMLLabelElement> {
  name: string
  placeholder: string
  title: string
  required: boolean
  type?: FormItem['type']
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
  handleBlur?: (e: FocusEvent<HTMLInputElement>) => void
  value?: string | number | readonly string[] | undefined
}
