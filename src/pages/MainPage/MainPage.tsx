import Title from '../../components/Title/Title'
import Form from '../../components/Form/Form'
import s from './MainPage.module.scss'

const MainPage = () => {
	return (
		<>
			<div className={s.background}></div>

			<div className={s.container}>
				<Title className={s.center}>Генератор резюме</Title>
				<Form />
			</div>
		</>
	)
}

export default MainPage
