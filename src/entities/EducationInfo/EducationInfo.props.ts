import {HTMLAttributes} from 'react'
import {IEducation} from '../../features/Form/Form.interfaces'

export interface EducationInfoProps extends HTMLAttributes<HTMLDivElement> {
  item: IEducation
}
