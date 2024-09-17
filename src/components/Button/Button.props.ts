import { HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    color?: 'transparent' | 'dark' | 'white' | 'dotted',
    type?: 'button' | 'submit'
}