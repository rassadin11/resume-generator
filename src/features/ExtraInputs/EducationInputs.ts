import { FormItem } from '../Form/FormData'

export interface IEducationInputs {
	id: number
	placeholder: string
	name: string
	title: string
	required: boolean
	type?: FormItem['type']
}

export const initialEducationInputs: IEducationInputs[] = [
	{
    id: 0,
		placeholder: 'Введите свою квалификацию',
		name: 'qualification',
		title: 'Квалификация',
		required: true,
	},
	{
    id: 1,
		placeholder: 'Введите дату начала обучения',
		name: 'dateStart',
		title: 'Дата начала обучения',
		required: true,
		type: 'date',
	},
	{
    id: 2,
		placeholder: 'Введите дату окончания обучения',
		name: 'dateEnd',
		title: 'Дата окончания обучения',
		required: true,
		type: 'date',
	},
]
