import { useNavigate } from 'react-router-dom'
import s from './ResumeColors.module.scss'
import { MouseEvent, useEffect } from 'react'
import { FormFieldsValue } from '../Form/Form.interfaces'
import { colors, palitra } from './ResumeColors.interfaces'

const ResumeColors = () => {
	const navigate = useNavigate()

	const handleClick = (e: MouseEvent<HTMLDivElement>) => {
		const obj: FormFieldsValue = JSON.parse(localStorage.getItem('form')!)
		const result: {
			mainInfo: FormFieldsValue
			colorInfo: palitra
		} = {
			mainInfo: obj,
			colorInfo: {
				color: e.currentTarget.dataset.color,
				mainText: e.currentTarget.dataset.mainText,
				fon: e.currentTarget.dataset.fon,
				backgroundColor: e.currentTarget.dataset.backgroundColor,
				backgroundMainColor: e.currentTarget.dataset.backgroundMainColor,
				dateColor: e.currentTarget.dataset.dateColor,
				title: e.currentTarget.dataset.title,
				borderSidebar: e.currentTarget.dataset.borderSidebar,
				borderMain: e.currentTarget.dataset.borderMain,
			},
		}

		localStorage.setItem(
			'result',
			JSON.stringify({
				...result,
			})
		)

		navigate('/resume-result', {
			state: {
				...result,
			},
		})
	}

	useEffect(() => {
		if (!localStorage.getItem('form')) {
			navigate('/')
		}
	}, [navigate])

	return (
		<div className={s.grid}>
			{colors.map((item) => (
				<div
					className={s.item}
					onClick={handleClick}
					data-color={item.color}
					data-title={item.title}
					data-main-text={item.mainText}
					data-background-color={item.backgroundColor}
					data-background-main-color={item.backgroundMainColor}
					data-date-color={item.dateColor}
					data-border-sidebar={item.borderSidebar}
					data-border-main={item.borderMain}
					data-fon={item.fon}
					key={item.title}
				>
					<div style={{ background: item.showColor }} className={s.color}></div>
					<p className={s.title}>{item.title}</p>
				</div>
			))}
		</div>
	)
}

export default ResumeColors
