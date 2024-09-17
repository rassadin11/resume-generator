import { ButtonProps } from './Button.props'
import s from './Button.module.scss'

const Button = ({
	color = 'white',
	children,
	type = 'submit',
	...props
}: ButtonProps) => {
	return (
		<button {...props} className={`${s[color]} ${s.button}`} type={type}>
			{children}
		</button>
	)
}

export default Button
