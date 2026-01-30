import {HTMLAttributes} from 'react'
import {IWorkPlace} from '../../features/Form/Form.interfaces'

export interface WorkItemProps extends HTMLAttributes<HTMLDivElement> {
  data: IWorkPlace
  color: string
}
