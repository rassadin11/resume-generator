import Title from '../../entities/Title/Title'
import Form from '../../features/Form/Form'
import s from './MainPage.module.scss'
import {useEffect} from 'react'

const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
