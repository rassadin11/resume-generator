import Resume from '../../features/Resume/Resume'
import Title from '../../entities/Title/Title'
import s from './PreviewPage.module.scss'
import Button from '../../entities/Button/Button'
import {useReactToPrint} from 'react-to-print'
import {useEffect, useRef} from 'react'
import {useZustand} from '../../zustand/zustand'

const PreviewPage = () => {
  const state = useZustand()

  console.log(state)

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
          state?.colorPalette?.fon
            ? {background: `${state.colorPalette.fon}`}
            : {}
        }
      ></div>

      <div className={s.container}>
        <Title
          className={s.center}
          style={
            state?.colorPalette?.color
              ? {color: `${state.colorPalette.color}`}
              : {}
          }
        >
          Результат
        </Title>
        <p>Не нравятся заголовки? Нажми и напиши свой!</p>
        <div className={s.whiteBackground}></div>
        <Resume data={{...state}} ref={resumeRef} />
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
