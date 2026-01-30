import {useNavigate} from 'react-router-dom'
import s from './ResumeColors.module.scss'
import {MouseEvent} from 'react'
import {palitra} from './ResumeColors.interfaces'
import {useZustand} from '../../zustand/zustand'
import {colors} from '../../constants/colors'

const ResumeColors = () => {
  const navigate = useNavigate()
  const {setColorPalette} = useZustand()

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const colorPalitra: palitra = {
      color: e.currentTarget.dataset.color,
      mainText: e.currentTarget.dataset.mainText,
      fon: e.currentTarget.dataset.fon,
      backgroundColor: e.currentTarget.dataset.backgroundColor,
      backgroundMainColor:
        e.currentTarget.dataset.backgroundMainColor,
      dateColor: e.currentTarget.dataset.dateColor,
      title: e.currentTarget.dataset.title,
      borderSidebar: e.currentTarget.dataset.borderSidebar,
      borderMain: e.currentTarget.dataset.borderMain,
    }

    setColorPalette(colorPalitra)
    navigate('/resume-result')
  }

  return (
    <div className={s.grid}>
      {colors.map(item => (
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
          <div
            style={{background: item.showColor}}
            className={s.color}
          ></div>
          <p className={s.title}>{item.title}</p>
        </div>
      ))}
    </div>
  )
}

export default ResumeColors
