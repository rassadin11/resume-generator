import { forwardRef } from 'react'
import EducationInfo from '../EducationInfo/EducationInfo'
import Title from '../Title/Title'
import WorkItem from '../WorkItem/WorkItem'
import s from './Resume.module.scss'
import { ResumeProps } from './Resume.props'
import cn from 'classnames'
import { IEducation, IWorkPlace } from '../Form/Form.interfaces'

const Resume = forwardRef<HTMLDivElement, ResumeProps>(({ data }, ref) => {
	const colorInfo = data && data.colorInfo

	if (!colorInfo) {
		return (
			<div>
				Что-то пошло не по плану. Вернись на главную страницу и попробуй ввести
				данные снова.
			</div>
		)
	}

	return (
		<>
			<section
				className={s.wrapper}
				ref={ref}
				style={{
					background: colorInfo.backgroundMainColor,
				}}
			>
				<aside
					className={s.sidebar}
					style={{
						background: colorInfo.backgroundColor,
						borderRight: '1px solid ' + colorInfo.borderSidebar,
					}}
				>
					<div
						className={s.sidebarInfo}
						style={{
							color: colorInfo.color,
						}}
					>
						<p className={s.title}>Контакты</p>
						<p className={s.text}>Email &ndash; {data.email}</p>
						<p className={s.text}>Телефон &ndash; {data.phone}</p>
						<p className={s.text}>Адрес &ndash; {data.address}</p>
					</div>
					{data.skills && data.skills.length > 0 && (
						<div
							className={s.sidebarInfo}
							style={{
								color: colorInfo.color,
							}}
						>
							<p className={s.title}>Умения</p>
							<ul className={s.list}>
								{data.skills.map((item: string) => (
									<li key={item}>
										{item.trim()[0].toUpperCase() + item.trim().slice(1)}
									</li>
								))}
							</ul>
						</div>
					)}
					<div
						className={s.sidebarInfo}
						style={{
							color: colorInfo.color,
						}}
					>
						{data.education && (
							<div>
								<p className={s.title}>Образование</p>
								{data.education.map((item: IEducation) => (
									<EducationInfo key={item.id} item={item} />
								))}
							</div>
						)}
					</div>
				</aside>
				<main
					className={s.main}
					style={{
						color: colorInfo.mainText,
					}}
				>
					<header
						className={s.header}
						style={{
							borderBottom: '1px solid ' + colorInfo.borderMain,
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
					<p className={cn(s.title, s.mainBlock)}>Обо мне</p>
					<p className={s.text}>{data.aboutMe}</p>
					{data.workPlace && data.workPlace.length > 0 ? (
						<>
							<p className={cn(s.title, s.mainBlock)}>Опыт работы</p>
							{data.workPlace.map((item: IWorkPlace) => (
								<WorkItem
									data={item}
									key={item.id}
									color={colorInfo.dateColor ? colorInfo.dateColor : ''}
								/>
							))}
						</>
					) : (
						''
					)}
				</main>
			</section>
			<div className={s.forMobile}>
				К сожалению, на мобильном устройстве невозможно осуществить предпросмотр
				готового резюме. Скачайте его, нажав на кнопку ниже.
			</div>
		</>
	)
})

export default Resume
