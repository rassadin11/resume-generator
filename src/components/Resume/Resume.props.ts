import { HTMLAttributes } from 'react';
import { FormFieldsValue } from '../Form/Form';

export interface ResumeProps extends HTMLAttributes<HTMLDivElement> {
    data: FormFieldsValue | undefined
}