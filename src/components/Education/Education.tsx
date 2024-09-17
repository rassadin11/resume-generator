import ExtraInputs from '../ExtraInputs/ExtraInputs'
import s from './Education.module.scss'
import { EducationProps } from './Education.props'
import { IEducation, IWorkPlace } from '../Form/Form'
import { initialEducationInputs } from '../ExtraInputs/EducationInputs'
import { MutableRefObject, RefObject } from 'react'
import { getNormalDate } from '../../functions/validateDate'

const Education = ({ education, setEducation }: EducationProps) => {
	const changeInputs = (item: IEducation | IWorkPlace) => {
		if ('qualification' in item) {
			const newInputs = [...education]
			newInputs[item.id] = item as IEducation

			setEducation(newInputs)
		}
	}

	const removeEducation = (id: number) => {
		const newEducation = education.filter((item) => item.id !== id)
		setEducation(newEducation)
	}

	const configureDate = (
		val: string,
		name: string,
		initialValues: IEducation | IWorkPlace,
		refs: MutableRefObject<RefObject<HTMLInputElement>[]>
	): Date => {
		if (name === 'dateEnd') {
			if (
				initialValues.dateStart &&
				new Date(val) < initialValues.dateStart &&
				new Date(val).getFullYear() >= 1000
			) {
				alert('Дата конца обучения не может быть раньше его начала')

				refs.current.map((item) => {
					if (
						item.current &&
						item.current.name === 'dateEnd' &&
						initialValues.dateStart !== undefined
					)
						item.current.value = getNormalDate(initialValues.dateStart)
				})

				return initialValues.dateStart
			}

			return new Date(val)
		} else {
			if (initialValues.dateEnd && new Date(val) > initialValues.dateEnd) {
				alert('Дата конца обучения не может быть раньше его начала')

				refs.current.map((item) => {
					if (
						item.current &&
						item.current.name === 'dateStart' &&
						initialValues.dateEnd !== undefined
					)
						item.current.value = getNormalDate(initialValues.dateEnd)
				})

				return initialValues.dateEnd
			}

			return new Date(val)
		}
	}

	return (
		<>
			{education.map((item, idx) => (
				<fieldset key={item.id} className={s.educationWrapper}>
					<legend className={s.legend}>
						Образование №{idx + 1}
						<svg
							height='22'
							width='22'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 490 490'
							className={s.garbage}
							onClick={() => removeEducation(item.id)}
						>
							<path d='M15.313 94.97h32.539v340.404c0 30.116 24.509 54.625 54.64 54.625h285.016c30.132 0 54.641-24.509 54.641-54.625V94.97h32.539V49.033H337.544V0H152.455v49.033H15.313V94.97zm380.898 340.405c0 4.71-3.993 8.688-8.703 8.688H102.492c-4.71 0-8.703-3.978-8.703-8.688V94.97h302.422v340.405z' />
							<path d='M247.552 360.162l75.21-91.608h-52.236V147.742h-45.938v120.812h-52.246z' />
						</svg>
					</legend>
					<ExtraInputs
						initialInputs={initialEducationInputs}
						changeInputs={changeInputs}
						configureDate={configureDate}
						typeOfInputs={{
							education: {
								initialValues: {
									id: item.id,
									qualification: education[idx].qualification,
									dateStart: education[idx].dateStart,
									dateEnd: education[idx].dateEnd,
								},
							},
						}}
					/>
				</fieldset>
			))}
		</>
	)
}

export default Education
