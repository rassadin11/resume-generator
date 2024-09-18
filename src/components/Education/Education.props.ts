import { HTMLAttributes } from 'react';
import { IEducation } from '../Form/Form.interfaces';

export interface EducationProps extends HTMLAttributes<HTMLFieldSetElement> {
    education: IEducation[];
    setEducation: (value: IEducation[]) => void;
}