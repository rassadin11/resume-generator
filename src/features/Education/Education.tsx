import ExtraInputs from '../ExtraInputs/ExtraInputs'
import s from './Education.module.scss'
import {initialEducationInputs} from '../ExtraInputs/EducationInputs'
import {IEducation, IWorkPlace} from '../Form/Form.interfaces'
import RemoveIcon from '../../assets/remove.svg?react'
import {initialWorkInputs} from './SingleForm.types'

interface ISingleInfoForm {
  title: string
  blocks: IEducation[] | IWorkPlace[]
  setBlocks: any
  initialBlockInputs:
    | typeof initialEducationInputs
    | typeof initialWorkInputs
}

const SingleInfoForm = ({
  title,
  blocks,
  setBlocks,
  initialBlockInputs,
}: ISingleInfoForm) => {
  const changeInputs = (item: IEducation | IWorkPlace) => {
    const newInputs = [...blocks]
    newInputs[item.id] = item
    setBlocks(newInputs)
  }

  const removeBlock = (id: number) => {
    const newEducation = blocks.filter(item => item.id !== id)
    setBlocks(newEducation)
  }

  return (
    <>
      {blocks.map((item, idx) => (
        <fieldset key={item.id} className={s.educationWrapper}>
          <legend className={s.legend}>
            {title} №{idx + 1}
            <div
              onClick={() => removeBlock(item.id)}
              className={s.removeIcon}
            >
              <RemoveIcon />
            </div>
          </legend>
          <ExtraInputs
            initialInputs={initialBlockInputs}
            changeInputs={changeInputs}
            initialValues={item}
          />
        </fieldset>
      ))}
    </>
  )
}

export default SingleInfoForm
