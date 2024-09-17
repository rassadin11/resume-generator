import { InputProps } from './Input.props'
import s from './Input.module.scss'
import { forwardRef } from 'react'

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{ name, title, placeholder, required, type = 'text', handleChange },
		ref
	) => {
		return (
			<>
				<label htmlFor={name}>{title}</label>
				<input
					className={s.input}
					id={name}
					name={name}
					ref={ref}
					type={type}
					placeholder={placeholder}
					required={required}
					onChange={handleChange}
				/>
			</>
		)
	}
)

export default Input
