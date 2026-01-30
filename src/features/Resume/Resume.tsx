import {forwardRef} from 'react'
import Title from '../../entities/Title/Title'
import s from './Resume.module.scss'
import {ResumeProps} from './Resume.props'
import cn from 'classnames'
import {IEducation, IWorkPlace} from '../Form/Form.interfaces'
import EducationInfo from '../../entities/EducationInfo/EducationInfo'
import WorkItem from '../../entities/WorkItem/WorkItem'
import {useNavigate} from 'react-router-dom'
import classNames from 'classnames'

const Resume = forwardRef<HTMLDivElement, ResumeProps>(
  ({data}, ref) => {
    const navigate = useNavigate()

    if (data.colorPalette === undefined) {
      navigate('/')
      return <></>
    }

    return (
      <>
        <section
          className={s.wrapper}
          ref={ref}
          style={{
            background: data.colorPalette.backgroundMainColor,
          }}
        >
          <aside
            className={s.sidebar}
            style={{
              background: data.colorPalette.backgroundColor,
              borderRight:
                '1px solid ' + data.colorPalette.borderSidebar,
            }}
          >
            <div
              className={s.sidebarInfo}
              style={{
                color: data.colorPalette.color,
              }}
            >
              <p className={s.title} contentEditable>
                Контакты
              </p>
              <p className={s.text}>Email &ndash; {data.email}</p>
              {data.phone ? (
                <p className={s.text}>Телефон &ndash; {data.phone}</p>
              ) : (
                ''
              )}
              {data.address ? (
                <p className={s.text}>Адрес &ndash; {data.address}</p>
              ) : (
                ''
              )}
            </div>
            <div
              className={s.sidebarInfo}
              style={{
                color: data.colorPalette.color,
              }}
            >
              {data.skills && data.skills.length > 0 && (
                <>
                  <p className={s.title} contentEditable>
                    Навыки
                  </p>
                  <ul className={s.list}>
                    {data.skills.map((item: string) => (
                      <li key={item}>
                        {item.trim()[0].toUpperCase() +
                          item.trim().slice(1)}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div
              className={s.sidebarInfo}
              style={{
                color: data.colorPalette.color,
              }}
            >
              {data.education && data.education.length ? (
                <div>
                  <p className={s.title}>Образование</p>
                  {data.education.map((item: IEducation) => (
                    <EducationInfo key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                ''
              )}
            </div>
          </aside>
          <main
            className={s.main}
            style={{
              color: data.colorPalette.mainText,
            }}
          >
            <header
              className={s.header}
              style={{
                borderBottom:
                  '1px solid ' + data.colorPalette.borderMain,
              }}
            >
              <div className={s.info}>
                <Title className={s.head}>
                  {data.name}&nbsp;{data.surname}
                </Title>
                <p className={s.profession}>{data.profession}</p>
              </div>
              {data.image ? (
                <img
                  src={data.image as string}
                  alt='Your photo'
                  className={s.image}
                />
              ) : (
                ''
              )}
            </header>
            <p className={cn(s.title, s.mainBlock)} contentEditable>
              Обо мне
            </p>
            <p className={classNames(s.text, s.aboutMe)}>
              {data.aboutMe}
            </p>
            {data.workPlace && data.workPlace.length > 0 ? (
              <>
                <p className={cn(s.title, s.mainBlock)}>
                  Опыт работы
                </p>
                {data.workPlace.map((item: IWorkPlace) => (
                  <WorkItem
                    data={item}
                    key={item.id}
                    color={
                      data.colorPalette?.dateColor
                        ? data.colorPalette.dateColor
                        : ''
                    }
                  />
                ))}
              </>
            ) : (
              ''
            )}
          </main>
        </section>
        <div className={s.forMobile}>
          К сожалению, на мобильном устройстве невозможно осуществить
          предпросмотр готового резюме. Скачайте его, нажав на кнопку
          ниже.
        </div>
      </>
    )
  },
)

export default Resume
