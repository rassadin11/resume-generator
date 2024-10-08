import { useEffect } from 'react'
import ResumeColors from '../../components/ResumeColors/ResumeColors'
import Title from '../../components/Title/Title'
import s from './ResumeColorsPage.module.scss'

const ResumePage = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<div className={s.background}></div>

			<div className={s.container}>
				<Title className={s.center}>Выберите цвет Вашего портфолио</Title>
				<ResumeColors />
			</div>
		</>
	)
}

export default ResumePage
