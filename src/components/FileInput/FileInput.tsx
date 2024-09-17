import { forwardRef, MouseEvent, Suspense, useId, useState } from 'react'
import { FileInputProps } from './FileInput.props'
import s from './FileInput.module.scss'
import photo from '../../assets/photo.svg'
import cn from 'classnames'

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
	({ handleChange, file, setFile, ...props }, ref) => {
		const [removeImage, setRemoveImage] = useState<boolean>(false)
		const id = useId()

		const handleClick = (e: MouseEvent<HTMLImageElement>) => {
			e.preventDefault()
			setRemoveImage(true)

			setTimeout(() => {
				setFile(null)
				setRemoveImage(false)
			}, 1000)
		}

		return (
			<label htmlFor={id} {...props} className={s.label}>
				{!file ? (
					<Suspense fallback={''}>
						<div className={s.wrapper}>
							<img src={photo} alt='Photo' className={s.photo} />
							<p className={s.title}>Добавьте фотографию</p>
						</div>
					</Suspense>
				) : (
					<img
						src={`${URL.createObjectURL(file)}`}
						alt={file.name}
						className={cn(s.preview, removeImage && s.remove)}
						onClick={handleClick}
					/>
				)}
				<input
					type='file'
					id={id}
					className={s.input}
					onChange={handleChange}
					ref={ref}
				/>
			</label>
		)
	}
)

export default FileInput
