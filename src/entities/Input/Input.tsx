import {InputProps} from './Input.props'
import s from './Input.module.scss'
import {useId} from 'react'

const Input = ({
  name,
  title,
  placeholder,
  required,
  type = 'text',
  handleChange,
  handleBlur,
  value,
}: InputProps) => {
  const id = useId()

  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input
        className={s.input}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </>
  )
}

export default Input
