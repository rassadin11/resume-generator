import { HTMLAttributes, MutableRefObject, RefObject } from 'react';
import { IEducation, IWorkPlace } from '../Form/Form';
import { IEducationInputs } from './EducationInputs';

export interface ExtraInputsProps extends HTMLAttributes<HTMLDivElement> {
    typeOfInputs: {
        education?: {
            initialValues: IEducation
        }
        work?: {
            initialValues: IWorkPlace
        }
    }
    changeInputs: (item: IEducation | IWorkPlace) => void
    initialInputs: IEducationInputs[]
    configureDate: (
		val: string,
		name: string,
		initialValues: IEducation | IWorkPlace,
		refs: MutableRefObject<RefObject<HTMLInputElement>[]>
	) => Date
}