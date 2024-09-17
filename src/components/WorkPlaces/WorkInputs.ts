export interface IEducationInputs {
	id: number
	placeholder: string
	name: string
	title: string
	required: boolean
	type?: "number" | "text" | "password" | "date" | "email"
}

export const initialWorkInputs: IEducationInputs[] = [
	{
    id: 0,
		placeholder: 'Введите свою должность',
		name: 'position',
		title: 'Должность',
		required: true,
	},
	{
    id: 1,
		placeholder: 'Введите название компании, в которой вы работали',
		name: 'company',
		title: 'Компания',
		required: true,
	},
	{
    id: 2,
		placeholder: 'Опишите вашу работу в этой компании',
		name: 'description',
		title: 'Описание работы',
		required: true,
	},
	{
    id: 3,
		placeholder: 'Введите дату начала работы',
		name: 'dateStart',
		title: 'Дата начала работы',
		required: true,
		type: 'date',
	},
	{
    id: 4,
		placeholder: 'Введите дату увольнения',
		name: 'dateEnd',
		title: 'Дата увольнения',
		required: true,
		type: 'date',
	},
]
