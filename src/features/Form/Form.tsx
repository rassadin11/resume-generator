import {ChangeEvent, DragEvent, FormEvent} from 'react'
import {useNavigate} from 'react-router-dom'
import cn from 'classnames'

import {FormFieldsValue} from './Form.interfaces'
import {useZustand} from '../../zustand/zustand'
import {FormData, FormItem} from './FormData'
import {initialEducationInputs} from '../ExtraInputs/SingleInfoFormInputs'
import {initialWorkInputs} from '../SingleInfoForm/SingleForm.types'
import Input from '../../entities/Input/Input'
import SingleInfoForm from '../SingleInfoForm/SingleInfoForm'
import Button from '../../entities/Button/Button'
import FileInput from '../FileInput/FileInput'

import s from './Form.module.scss'
import plus from '../../assets/plus.svg'

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
    setName,
    setProfession,
    setSurname,
    setEmail,
    setPhone,
    setAddress,
  } = useZustand()

  const navigate = useNavigate()

  const handleDrop = (
    e: DragEvent<HTMLFormElement> | DragEvent<HTMLDivElement>,
    isDrag: boolean,
  ) => {
    e.preventDefault()
    e.stopPropagation()
    setDrag(isDrag)

    if (e.dataTransfer.files.length === 0) return
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
    setEducation([
      ...education,
      {
        id:
          education.length > 0
            ? education[education.length - 1].id + 1
            : 0,
        qualification: '',
      },
    ])
  }

  const addWorkPlaceClick = () => {
    setWorkPlace([
      ...workPlace,
      {
        id:
          workPlace.length > 0
            ? workPlace[workPlace.length - 1].id + 1
            : 0,
        position: '',
        company: '',
        description: '',
      },
    ])
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    navigate('/choose-theme')
  }

  const controlInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: FormItem,
  ) => {
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
  }

  return (
    <form
      className={cn(s.grid, drag && s.active)}
      onDragOver={e => handleDrop(e, true)}
      onDragLeave={e => handleDrop(e, false)}
      onDrop={e => handleDrop(e, false)}
      onSubmit={handleSubmit}
    >
      <div
        className={cn(s.dropzone, drag && s.active)}
        onDragOver={e => handleDrop(e, true)}
        onDragLeave={e => handleDrop(e, false)}
        onDrop={e => handleDrop(e, false)}
      >
        Загрузите ваше фото сюда!
      </div>

      <div className={`${s.formItem} ${s.first}`}>
        <FileInput
          handleChange={handleFileChange}
          className={s.input}
          file={image}
          setFile={setImage}
        />
      </div>

      {FormData.map(item => (
        <div className={cn(s.formItem, item.class)} key={item.id}>
          <Input
            name={item.name}
            title={item.title}
            placeholder={item.placeholder}
            type={item.type}
            required={item.required}
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              controlInput(e, item)
            }
          />
        </div>
      ))}

      <textarea
        className={s.textarea}
        placeholder='Опишите себя как можно подробнее'
        rows={5}
        value={aboutMe}
        onChange={e => setAboutMe(e.target.value)}
        required
      ></textarea>

      <textarea
        className={s.textarea}
        placeholder="Через знак ',' перечислите какими умениями Вы обладаете"
        rows={2}
        value={skills?.join(',') || ''}
        onChange={e =>
          setSkills(e.target.value.split(',').map(s => s.trim()))
        }
      ></textarea>

      <div className={s.addEducation} onClick={addEducationClick}>
        <Button color='dotted' type='button'>
          Добавить образование{' '}
          <img src={plus} className={s.plus} alt='Plus' />
        </Button>
      </div>

      {education ? (
        <SingleInfoForm
          title={'Образование'}
          blocks={education}
          setBlocks={setEducation}
          initialBlockInputs={initialEducationInputs}
        />
      ) : (
        ''
      )}

      <div className={s.addEducation} onClick={addWorkPlaceClick}>
        <Button color='dotted' type='button'>
          Добавить место работы{' '}
          <img src={plus} className={s.plus} alt='Plus' />
        </Button>
      </div>

      {workPlace ? (
        <SingleInfoForm
          title={'Место работы'}
          blocks={workPlace}
          setBlocks={setWorkPlace}
          initialBlockInputs={initialWorkInputs}
        />
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
