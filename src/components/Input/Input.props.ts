import { FormItem } from './../Form/FormData';
import { ChangeEvent, HTMLAttributes } from 'react';

export interface InputProps extends HTMLAttributes<HTMLLabelElement> {
    name: string
    placeholder: string
    title: string
    required: boolean
    type?: FormItem['type']
    handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}