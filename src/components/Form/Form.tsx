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
} from 'react'
import { useNavigate } from 'react-router-dom'
import plus from '../../assets/plus.svg'
import Education from '../Education/Education'
import WorkPlaces from '../WorkPlaces/WorkPlaces'
import {
	FormFieldsValue,
} from './Form.interfaces'
import { useZustand } from '../../zustand/zustand'

// form
const Form = () => {
	const {
		drag,
		setDrag,
		image,
		setImage,
		education,
		setEducation,
		workPlace,
		setWorkPlace,
		aboutMe,
		setAboutMe,
		skills,
		setSkills,
		name,
		setName,
		profession,
		setProfession,
		surname,
		setSurname,
		email,
		setEmail,
		phone,
		setPhone,
		address,
		setAddress,
	} = useZustand()

	const fileRef = useRef<HTMLInputElement | null>(null)
	const skillsRef = useRef<HTMLTextAreaElement | null>(null)
	const aboutMeRef = useRef<HTMLTextAreaElement | null>(null)
	const inputRefs = useRef<RefObject<HTMLInputElement>[]>(
		FormData.map(() => createRef())
	)

	const navigate = useNavigate()

	const handleDrop = (
		e: DragEvent<HTMLFormElement> | DragEvent<HTMLDivElement>,
		isDrag: boolean
	) => {
		e.preventDefault()
		e.stopPropagation()
		setDrag(isDrag)

		if (e.dataTransfer.files === null) return
		else {
			const myFile = e.dataTransfer.files[0]
			const reader = new FileReader()
			reader.onloadend = () => setImage(reader.result)
			reader.readAsDataURL(myFile)
		}
	}

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files === null) return
		else {
			const myFile = event.target.files[0]
			const reader = new FileReader()
			reader.onloadend = () => setImage(reader.result)
			reader.readAsDataURL(myFile)
		}
	}

	const addEducationClick = () => {
		if (education.length > 0) {
			setEducation([
				...education,
				{
					id: education[education.length - 1].id + 1,
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
			setWorkPlace([
				...workPlace,
				{
					id: workPlace[workPlace.length - 1].id + 1,
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
		console.log('Form submitted')
		navigate('/choose-theme')
	}

	useEffect(() => {
		FormData.forEach((item, i) => {
			const inputRef = inputRefs.current[i].current
			if (inputRef && item.name) {
				const fieldName = item.name as keyof Omit<
					FormFieldsValue,
					| 'color'
					| 'image'
					| 'colorTitle'
					| 'aboutMe'
					| 'skills'
					| 'education'
					| 'workPlace'
					| 'drag'
				>
				const storeValue = {
					name,
					profession,
					surname,
					email,
					phone,
					address,
				}[fieldName] as string | undefined
				inputRef.value = storeValue ?? ''
			}
		})

		if (skillsRef.current) {
			skillsRef.current.value = skills?.join(',') || ''
		}

		if (aboutMeRef.current) {
			aboutMeRef.current.value = aboutMe || ''
		}
	}, [name, profession, surname, email, phone, address, skills, aboutMe])

	return (
		<form
			className={cn(s.grid, drag && s.active)}
			onDragOver={(e) => handleDrop(e, true)}
			onDragLeave={(e) => handleDrop(e, false)}
			onDrop={(e) => handleDrop(e, false)}
			onSubmit={handleSubmit}
		>
			<div
				className={cn(s.dropzone, drag && s.active)}
				onDragOver={(e) => handleDrop(e, true)}
				onDragLeave={(e) => handleDrop(e, false)}
				onDrop={(e) => handleDrop(e, false)}
			>
				Drop your file here!
			</div>

			<div className={`${s.formItem} ${s.first}`}>
				<FileInput
					handleChange={handleFileChange}
					className={s.input}
					ref={fileRef}
					file={image}
					setFile={setImage}
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
						handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							const fieldName = item.name as keyof Omit<
								FormFieldsValue,
								| 'color'
								| 'image'
								| 'colorTitle'
								| 'aboutMe'
								| 'skills'
								| 'education'
								| 'workPlace'
								| 'drag'
							>
							const setters = {
								name: setName,
								profession: setProfession,
								surname: setSurname,
								email: setEmail,
								phone: setPhone,
								address: setAddress,
							}
							const setter = setters[fieldName]
							if (setter) setter(e.target.value)
						}}
					/>
				</div>
			))}

			<textarea
				className={s.textarea}
				placeholder='Опишите себя как можно подробнее'
				rows={5}
				ref={aboutMeRef}
				value={aboutMe}
				onChange={(e) => setAboutMe(e.target.value)}
				required
			></textarea>

			<textarea
				className={s.textarea}
				placeholder="Через знак ',' перечислите какими умениями Вы обладаете"
				rows={2}
				ref={skillsRef}
				value={skills?.join(',') || ''}
				onChange={(e) => setSkills(e.target.value.split(',').map(s => s.trim()))}
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
