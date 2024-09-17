import { HTMLAttributes } from 'react';
import { IWorkPlace } from '../Form/Form';

export interface WorkItemProps extends HTMLAttributes<HTMLDivElement> {
    data: IWorkPlace
    color: string
}