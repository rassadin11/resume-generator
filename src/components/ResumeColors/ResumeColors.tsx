import { useNavigate } from 'react-router-dom'
import s from './ResumeColors.module.scss'
import { MouseEvent, useEffect } from 'react'
import { FormFieldsValue } from '../Form/Form'

interface Color {
	showColor: string
	color: string
	mainText: string
	backgroundColor: string
	dateColor: string
	backgroundMainColor: string
	title: string
	borderSidebar: string
	borderMain: string
}

const colors: Color[] = [
	{
		showColor:
			'linear-gradient(45deg, rgba(86,219,84,1) 0%, rgba(31,205,209,1) 100%)',
		color: '#222222',
		mainText: '#000',
		backgroundColor:
			'linear-gradient(45deg, rgba(86,219,84,1) 0%, rgba(31,205,209,1) 100%)',
		backgroundMainColor: '#fff',
		dateColor: '#000',
		title: 'Светло-зеленый градиент',
		borderSidebar: 'transparent',
		borderMain: 'transparent',
	},
	{
		showColor: 'linear-gradient(45deg, #b94083 0%, #fc3464 100%)',
		color: '#fff',
		mainText: '#000',
		backgroundColor: 'linear-gradient(45deg, #b94083 0%, #fc3464 100%)',
		backgroundMainColor: '#fff',
		dateColor: '#fc3464',
		title: 'Красный градиент',
		borderSidebar: 'transparent',
		borderMain: 'transparent',
	},
	{
		showColor:
			'linear-gradient(45deg, rgba(225,111,193,1) 0%, rgba(140,95,240,1) 100%)',
		color: '#fff',
		mainText: '#000',
		backgroundColor:
			'linear-gradient(45deg, rgba(225,111,193,1) 0%, rgba(140,95,240,1) 100%)',
		backgroundMainColor: '#fff',
		dateColor: '#000',
		title: 'Фиолетовый градиент',
		borderSidebar: 'transparent',
		borderMain: 'transparent',
	},
	{
		showColor:
			'linear-gradient(90deg, rgba(40,42,54,1) 0%, rgba(9,9,12,1) 100%)',
		color: '#fff',
		mainText: '#fff',
		backgroundColor: 'transparent',
		backgroundMainColor:
			'linear-gradient(90deg, rgba(40,42,54,1) 0%, rgba(9,9,12,1) 100%)',
		dateColor: '#fff',
		title: 'Total Black',
		borderSidebar: '#fff',
		borderMain: '#fff',
	},
	{
		showColor: 'linear-gradient(209deg, rgb(255 170 1), rgb(53 38 0))',
		color: '#fff',
		mainText: '#fff',
		backgroundColor: 'transparent',
		backgroundMainColor:
			'linear-gradient(209deg, rgb(255 170 1), rgb(53 38 0))',
		dateColor: '#fff',
		title: 'Пчела',
		borderSidebar: '#fff',
		borderMain: '#fff',
	},
]

const ResumeColors = () => {
	const navigate = useNavigate()

	const handleClick = (e: MouseEvent<HTMLDivElement>) => {
		const obj: FormFieldsValue = JSON.parse(localStorage.getItem('form')!)

		localStorage.setItem(
			'form',
			JSON.stringify({
				...obj,
				colorInfo: {
					color: e.currentTarget.dataset.color,
					mainText: e.currentTarget.dataset.mainText,
					backgroundColor: e.currentTarget.dataset.backgroundColor,
					backgroundMainColor: e.currentTarget.dataset.backgroundMainColor,
					dateColor: e.currentTarget.dataset.dateColor,
					title: e.currentTarget.dataset.title,
					borderSidebar: e.currentTarget.dataset.borderSidebar,
					borderMain: e.currentTarget.dataset.borderMain,
				},
			})
		)

		navigate('/resume-result', { state: obj })
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
