import { months } from '../../constants/months'
import s from './WorkItem.module.scss'
import { WorkItemProps } from './WorkItem.props'

const WorkItem = ({ data, color }: WorkItemProps) => {
	const start = data.dateStart ? new Date(data.dateStart) : undefined
	const end = data.dateEnd ? new Date(data.dateEnd) : undefined

	return (
		<div className={s.wrapper}>
			<div className={s.flex}>
				<div>
					<p className={s.title}>{data.position}</p>
					<p className={s.company}>{data.company}</p>
				</div>

				{start && end && (
					<p className={s.date} style={{ color: color }}>
						<span>
							{months[start.getMonth()]}, {start.getFullYear()}
						</span>{' '}
						&ndash;{' '}
						<span>
							{months[end.getMonth()]}, {end.getFullYear()}
						</span>
					</p>
				)}
			</div>
			<p className={s.description}>{data.description}</p>
		</div>
	)
}

export default WorkItem
