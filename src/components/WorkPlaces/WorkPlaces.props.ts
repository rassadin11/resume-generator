import { HTMLAttributes } from 'react';
import { IWorkPlace } from '../Form/Form.interfaces';

export interface WorkPlacesProps extends HTMLAttributes<HTMLDivElement> {
    workPlace: IWorkPlace[]
    setWorkPlace: React.Dispatch<React.SetStateAction<IWorkPlace[]>>
}