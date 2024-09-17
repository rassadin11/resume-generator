import { IEducation, IWorkPlace } from '../Form/Form'
import { WorkPlacesProps } from './WorkPlaces.props'
import s from './WorkPlaces.module.scss'
import ExtraInputs from '../ExtraInputs/ExtraInputs'
import { initialWorkInputs } from './WorkInputs'
import { getNormalDate } from '../../functions/validateDate'
import { MutableRefObject, RefObject } from 'react'

const WorkPlaces = ({ workPlace, setWorkPlace }: WorkPlacesProps) => {
	const changeInputs = (item: IEducation | IWorkPlace) => {
		if ('company' in item) {
			const newInputs = [...workPlace]
			newInputs[item.id] = item as IWorkPlace

			setWorkPlace(newInputs)
		}
	}

	const removeWork = (id: number) => {
		const newEducation = workPlace.filter((item) => item.id !== id)
		setWorkPlace(newEducation)
	}

	const configureDate = (
		val: string,
		name: string,
		initialValues: IEducation | IWorkPlace,
		refs: MutableRefObject<RefObject<HTMLInputElement>[]>
	): Date => {
		if ('company' in initialValues) {
			if (name === 'dateEnd') {
				if (
					initialValues.dateStart &&
					new Date(val) < initialValues.dateStart &&
					new Date(val).getFullYear() >= 1000
				) {
					alert('Дата конца работы не может быть раньше ее начала')

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
					alert('Дата конца работы не может быть раньше ее начала')

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
		} else {
			return new Date(val)
		}
	}

	return (
		<>
			{workPlace.map((item, idx) => (
				<fieldset key={item.id} className={s.educationWrapper}>
					<legend className={s.legend}>
						Работа №{idx + 1}
						<svg
							height='22'
							width='22'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 490 490'
							className={s.garbage}
							onClick={() => removeWork(item.id)}
						>
							<path d='M15.313 94.97h32.539v340.404c0 30.116 24.509 54.625 54.64 54.625h285.016c30.132 0 54.641-24.509 54.641-54.625V94.97h32.539V49.033H337.544V0H152.455v49.033H15.313V94.97zm380.898 340.405c0 4.71-3.993 8.688-8.703 8.688H102.492c-4.71 0-8.703-3.978-8.703-8.688V94.97h302.422v340.405z' />
							<path d='M247.552 360.162l75.21-91.608h-52.236V147.742h-45.938v120.812h-52.246z' />
						</svg>
					</legend>
					<ExtraInputs
						initialInputs={initialWorkInputs}
						changeInputs={changeInputs}
						configureDate={configureDate}
						typeOfInputs={{
							work: {
								initialValues: {
									id: item.id,
									position: workPlace[idx].position,
									company: workPlace[idx].company,
									description: workPlace[idx].description,
									dateStart: workPlace[idx].dateStart,
									dateEnd: workPlace[idx].dateEnd,
								},
							},
						}}
					/>
				</fieldset>
			))}
		</>
	)
}

export default WorkPlaces
