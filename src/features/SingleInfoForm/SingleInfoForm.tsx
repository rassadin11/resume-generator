import ExtraInputs from '../ExtraInputs/ExtraInputs'
import s from './SingleInfoForm.module.scss'
import {IEducation, IWorkPlace} from '../Form/Form.interfaces'
import RemoveIcon from '../../assets/remove.svg?react'
import {ISingleInfoForm} from './SingleForm.types'

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
