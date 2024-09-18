import Button from '../Button/Button'
import FileInput from '../FileInput/FileInput'
import s from './Form.module.scss'
import cn from 'classnames'
import { FormData } from './FormData'
import Input from '../Input/Input'
import {
	ChangeEvent,
	createRef,
	DragEvent,
	FormEvent,
	RefObject,
	useEffect,
	useRef,
	useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import plus from '../../assets/plus.svg'
import Education from '../Education/Education'
import WorkPlaces from '../WorkPlaces/WorkPlaces'
import {
	FormFieldsValue,
	IEducation,
	initialFormFields,
	IWorkPlace,
} from './Form.interfaces'

const Form = () => {
	const [drag, setDrag] = useState<boolean>(false)
	const [previousData, setPreviousData] =
		useState<FormFieldsValue>(initialFormFields)
	const [file, setFile] = useState<string | ArrayBuffer | null>(null)
	const [education, setEducation] = useState<IEducation[]>([])
	const [workPlace, setWorkPlace] = useState<IWorkPlace[]>([])

	const fileRef = useRef<HTMLInputElement | null>(null)
	const skillsRef = useRef<HTMLTextAreaElement | null>(null)
	const aboutMeRef = useRef<HTMLTextAreaElement | null>(null)
	const inputRefs = useRef<RefObject<HTMLInputElement>[]>(
		FormData.map(() => createRef())
	)

	const navigate = useNavigate()

	const handleDragOver = (
		e: DragEvent<HTMLFormElement> | DragEvent<HTMLDivElement>
	): void => {
		e.preventDefault()
		e.stopPropagation()

		setDrag(true)
	}

	const handleDragLeave = (
		e: DragEvent<HTMLFormElement> | DragEvent<HTMLDivElement>
	): void => {
		e.preventDefault()
		e.stopPropagation()
		setDrag(false)
	}

	const handleDrop = (
		e: DragEvent<HTMLFormElement> | DragEvent<HTMLDivElement>
	) => {
		e.preventDefault()
		e.stopPropagation()
		setDrag(false)

		if (e.dataTransfer.files === null) return
		else {
			const myFile = e.dataTransfer.files[0]
			const reader = new FileReader()
			reader.onloadend = () => setFile(reader.result)
			reader.readAsDataURL(myFile)
		}
	}

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files === null) return
		else {
			const myFile = event.target.files[0]
			const reader = new FileReader()
			reader.onloadend = () => setFile(reader.result)
			reader.readAsDataURL(myFile)
		}
	}

	const addEducationClick = () => {
		if (education.length > 0) {
			setEducation((ed) => [
				...ed,
				{
					id: ed[ed.length - 1].id + 1,
					qualification: '',
				},
			])
		} else {
			setEducation([
				{
					id: 0,
					qualification: '',
				},
			])
		}
	}

	const addWorkPlaceClick = () => {
		if (workPlace.length > 0) {
			setWorkPlace((work) => [
				...work,
				{
					id: work[work.length - 1].id + 1,
					position: '',
					company: '',
					description: '',
				},
			])
		} else {
			setWorkPlace([
				{
					id: 0,
					position: '',
					company: '',
					description: '',
				},
			])
		}
	}

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		const obj: Record<string, FormFieldsValue[keyof FormFieldsValue]> = {}

		FormData.forEach((_, i) => {
			const ref = inputRefs.current[i].current

			if (ref) {
				const { value, name } = ref
				if (name) {
					obj[name] = value
				}
			}
		})

		if (skillsRef.current && skillsRef.current.value) {
			obj.skills = skillsRef.current.value.split(',')
		}

		if (aboutMeRef.current && aboutMeRef.current.value) {
			obj.aboutMe = aboutMeRef.current.value
		}

		obj.image = file
		obj.education = education
		obj.workPlace = workPlace

		localStorage.setItem('form', JSON.stringify(obj))
		navigate('/choose-theme')
	}

	useEffect(() => {
		if (localStorage.getItem('form')) {
			if (confirm('У вас есть ранее сохраненные данные. Хотите продолжить?')) {
				const obj = localStorage.getItem('form')
				if (obj) setPreviousData(JSON.parse(obj))
			} else {
				localStorage.removeItem('form')
			}
		}
	}, [])

	useEffect(() => {
		FormData.forEach((_, i) => {
			const item = inputRefs.current[i].current

			if (item && item.name) {
				const attr = item.name as keyof FormFieldsValue

				if (
					attr !== 'color' &&
					attr !== 'colorTitle' &&
					attr !== 'image' &&
					attr !== 'skills' &&
					attr !== 'aboutMe' &&
					attr !== 'education' &&
					attr !== 'workPlace'
				) {
					item.value = previousData[attr]
				}
			}
		})

		if (skillsRef.current && previousData.skills) {
			skillsRef.current.value = previousData.skills?.join()
		}

		if (aboutMeRef.current && previousData.aboutMe) {
			aboutMeRef.current.value = previousData.aboutMe
		}

		if (previousData.education?.length) {
			setEducation(previousData.education)
		}

		if (previousData.workPlace?.length) {
			setWorkPlace(previousData.workPlace)
		}
	}, [inputRefs, previousData])

	useEffect(() => {
		console.log(education)
	}, [education])

	return (
		<form
			className={cn(s.grid, drag && s.active)}
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
			onDrop={handleDrop}
			onSubmit={handleSubmit}
		>
			<div
				className={cn(s.dropzone, drag && s.active)}
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
				onDrop={handleDrop}
			>
				Drop your file here!
			</div>

			<div className={`${s.formItem} ${s.first}`}>
				<FileInput
					handleChange={handleFileChange}
					className={s.input}
					ref={fileRef}
					file={file}
					setFile={setFile}
				/>
			</div>

			{FormData.map((item, idx) => (
				<div className={cn(s.formItem, item.class)} key={item.id}>
					<Input
						ref={inputRefs.current[idx]}
						name={item.name}
						title={item.title}
						placeholder={item.placeholder}
						type={item.type}
						required
					/>
				</div>
			))}

			<textarea
				className={s.textarea}
				placeholder='Опишите себя как можно подробнее'
				rows={5}
				ref={aboutMeRef}
				required
			></textarea>

			<textarea
				className={s.textarea}
				placeholder="Через знак ',' перечислите какими умениями Вы обладаете"
				rows={2}
				ref={skillsRef}
			></textarea>

			<div className={s.addEducation} onClick={addEducationClick}>
				<Button color='dotted' type='button'>
					Добавить образование <img src={plus} className={s.plus} alt='Plus' />
				</Button>
			</div>

			{education ? (
				<Education education={education} setEducation={setEducation} />
			) : (
				''
			)}

			<div className={s.addEducation} onClick={addWorkPlaceClick}>
				<Button color='dotted' type='button'>
					Добавить место работы <img src={plus} className={s.plus} alt='Plus' />
				</Button>
			</div>

			{workPlace ? (
				<WorkPlaces workPlace={workPlace} setWorkPlace={setWorkPlace} />
			) : (
				''
			)}

			<div className={s.button}>
				<Button color='white'>Перейти дальше</Button>
			</div>
		</form>
	)
}

export default Form
