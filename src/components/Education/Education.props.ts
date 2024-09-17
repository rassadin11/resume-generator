import { HTMLAttributes } from 'react';
import { IEducation } from '../Form/Form';

export interface EducationProps extends HTMLAttributes<HTMLFieldSetElement> {
    education: IEducation[];
    setEducation: (value: IEducation[]) => void;
}