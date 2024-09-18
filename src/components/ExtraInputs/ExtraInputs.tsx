import { ChangeEvent, createRef, RefObject, useEffect, useRef } from 'react'
import Input from '../Input/Input'
import s from './ExtraInputs.module.scss'
import { ExtraInputsProps } from './ExtraInputs.props'
import { getNormalDate } from '../../functions/validateDate'
import { IEducation, IWorkPlace } from '../Form/Form.interfaces'

function isWork(values: IEducation | IWorkPlace): values is IWorkPlace {
	return (values as IWorkPlace).company !== undefined
}

const ExtraInputs = ({
	changeInputs,
	initialInputs,
	typeOfInputs,
	configureDate,
}: ExtraInputsProps) => {
	const refs = useRef<RefObject<HTMLInputElement>[]>(
		initialInputs.map(() => createRef())
	)

	const initialValues = typeOfInputs.education
		? typeOfInputs.education.initialValues
		: typeOfInputs.work && typeOfInputs.work.initialValues

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (!initialValues) return

		if (
			Object.keys(typeOfInputs).includes('education') &&
			!isWork(initialValues)
		) {
			changeInputs({
				...initialValues,
				[e.target.name]:
					e.target.type === 'date'
						? configureDate(e.target.value, e.target.name, initialValues, refs)
						: e.target.value,
			})
		} else if (
			Object.keys(typeOfInputs).includes('work') &&
			isWork(initialValues)
		) {
			changeInputs({
				...initialValues,
				[e.target.name]:
					e.target.type === 'date'
						? configureDate(e.target.value, e.target.name, initialValues, refs)
						: e.target.value,
			})
		}
	}

	useEffect(() => {
		if (!initialValues) return

		if (!isWork(initialValues)) {
			refs.current.map((item) => {
				if (item.current !== null && !item.current.value) {
					if (item.current.type !== 'date') {
						item.current.value = initialValues[
							item.current.name as keyof IEducation
						] as string
					} else {
						if (initialValues[item.current.name as keyof IEducation]) {
							item.current.value = getNormalDate(
								new Date(
									initialValues[item.current.name as keyof IEducation] as Date
								)
							)
						}
					}
				}
			})
		} else if (isWork(initialValues)) {
			refs.current.map((item) => {
				if (item.current !== null && !item.current.value) {
					if (item.current.type !== 'date') {
						item.current.value = initialValues[
							item.current.name as keyof IWorkPlace
						] as string
					} else {
						if (initialValues[item.current.name as keyof IWorkPlace]) {
							item.current.value = getNormalDate(
								new Date(
									initialValues[item.current.name as keyof IWorkPlace] as Date
								)
							)
						}
					}
				}
			})
		}
	}, [])

	return (
		<div className={s.flex}>
			{initialInputs.map((item) => (
				<div className={s.wrapper} key={item.id}>
					<Input
						handleChange={handleChange}
						ref={refs.current[item.id]}
						placeholder={item.placeholder}
						name={item.name}
						title={item.title}
						type={item.type || 'text'}
						required={item.required}
					/>
				</div>
			))}
		</div>
	)
}

export default ExtraInputs
