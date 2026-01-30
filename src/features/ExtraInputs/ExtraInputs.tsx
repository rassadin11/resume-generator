import {ChangeEvent, useEffect, useState} from 'react'
import s from './ExtraInputs.module.scss'
import {ExtraInputsProps} from './ExtraInputs.props'
import {validateDates} from '../../functions/validateDate'
import Input from '../../entities/Input/Input'

const ExtraInputs = ({
  changeInputs,
  initialInputs,
  initialValues,
}: ExtraInputsProps) => {
  const [currentValues, setCurrentValues] = useState(initialValues)
  const [validDates, setValidDates] = useState(true)

  useEffect(() => {
    setCurrentValues(initialValues)
  }, [initialValues])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (!currentValues) return

    setCurrentValues({
      ...currentValues,
      [e.target.name]:
        e.target.type === 'date'
          ? new Date(e.target.value)
          : e.target.value,
    })
  }

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    if (!currentValues) return

    if (
      (e.target.name === 'dateStart' ||
        e.target.name === 'dateEnd') &&
      currentValues.dateStart &&
      currentValues.dateEnd
    ) {
      if (
        validateDates(
          currentValues.dateStart as Date,
          currentValues.dateEnd as Date,
        )
      ) {
        setValidDates(true)
        changeInputs(currentValues)
      } else {
        setValidDates(false)
        console.log('invalid dates')
      }
    }
  }

  return (
    <div className={s.flex}>
      {initialInputs.map(item => (
        <div className={s.wrapper} key={item.id}>
          {item.isTextarea ? (
            <textarea
              rows={5}
              className={s.textarea}
              placeholder={item.placeholder}
              onChange={handleChange}
              name={item.name}
              required={item.required}
            />
          ) : (
            <Input
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder={item.placeholder}
              name={item.name}
              title={item.title}
              type={item.type || 'text'}
              required={item.required}
            />
          )}
        </div>
      ))}
      {!validDates && (
        <p className={s.error}>
          Проверьте корректность введённых дат
        </p>
      )}
    </div>
  )
}

export default ExtraInputs
