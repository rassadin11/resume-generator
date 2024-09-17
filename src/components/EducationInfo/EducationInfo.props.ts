import { HTMLAttributes } from 'react';
import { IEducation } from '../Form/Form';

export interface EducationInfoProps extends HTMLAttributes<HTMLDivElement> {
    item: IEducation
}