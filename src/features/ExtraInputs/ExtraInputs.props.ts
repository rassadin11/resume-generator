import {HTMLAttributes} from 'react'
import {IEducationInputs} from './EducationInputs'
import {IEducation, IWorkPlace} from '../Form/Form.interfaces'

export interface ExtraInputsProps extends HTMLAttributes<HTMLDivElement> {
  initialValues: IWorkPlace | IEducation
  initialInputs: IEducationInputs[]
  changeInputs: (item: IEducation | IWorkPlace) => void
}
