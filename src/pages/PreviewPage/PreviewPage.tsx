import Resume from '../../components/Resume/Resume'
import Title from '../../components/Title/Title'
import s from './PreviewPage.module.scss'
import { useLocation } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { useReactToPrint } from 'react-to-print'
import { useEffect, useRef } from 'react'
import { FormFieldsValue } from '../../components/Form/Form.interfaces'
import { palitra } from '../../components/ResumeColors/ResumeColors.interfaces'

const PreviewPage = () => {
	const location = useLocation()
	const state = location.state as {
		mainInfo: FormFieldsValue
		colorInfo: palitra
	}

	const resumeRef = useRef<HTMLDivElement>(null)

	const generatePDF = useReactToPrint({
		content: () => resumeRef.current,
		documentTitle: 'Resume',
	})

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<div
				className={s.background}
				style={
					state?.colorInfo?.fon ? { background: `${state.colorInfo.fon}` } : {}
				}
			></div>

			<div className={s.container}>
				<Title
					className={s.center}
					style={
						state?.colorInfo?.color ? { color: `${state.colorInfo.color}` } : {}
					}
				>
					Результат
				</Title>
				<div className={s.whiteBackground}></div>
				<Resume
					data={state.mainInfo}
					colorInfo={state.colorInfo}
					ref={resumeRef}
				/>
				<div className={s.button}>
					<Button color='white' onClick={generatePDF}>
						Сохранить
					</Button>
				</div>
			</div>
		</>
	)
}

export default PreviewPage
