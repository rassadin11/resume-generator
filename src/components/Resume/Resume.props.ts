import { HTMLAttributes } from 'react';
import { FormFieldsValue } from '../Form/Form.interfaces';
import { palitra } from '../ResumeColors/ResumeColors';

export interface ResumeProps extends HTMLAttributes<HTMLDivElement> {
    data: (FormFieldsValue & palitra) | undefined
}