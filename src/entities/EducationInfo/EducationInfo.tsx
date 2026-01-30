import { months } from '../../constants/months'
import s from './EducationInfo.module.scss'
import { EducationInfoProps } from './EducationInfo.props'

const EducationInfo = ({ item }: EducationInfoProps) => {
	const start = new Date(item.dateStart!)
	const end = new Date(item.dateEnd!)

	return (
		<div className={s.educationBlock}>
			<p className={s.title}>{item.qualification}</p>

			<p className={s.date}>
				<span>
					{months[start.getMonth()]}, {start.getFullYear()}
				</span>{' '}
				&ndash;{' '}
				<span>
					{months[end.getMonth()]}, {end.getFullYear()}
				</span>
			</p>
		</div>
	)
}

export default EducationInfo
