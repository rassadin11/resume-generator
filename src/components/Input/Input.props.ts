import { ChangeEvent, HTMLAttributes } from 'react';

export interface InputProps extends HTMLAttributes<HTMLLabelElement> {
    name: string
    placeholder: string
    title: string
    required: boolean
    type?: 'text' | 'password' | 'date' | 'email' | 'number'
    handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}