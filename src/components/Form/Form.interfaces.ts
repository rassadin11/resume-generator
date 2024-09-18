export interface IEducation {
	id: number
	qualification: string
	dateStart?: Date
	dateEnd?: Date
}

export interface IWorkPlace {
	id: number
	position: string
	company: string
	description: string
	dateStart?: Date
	dateEnd?: Date
}

export interface FormFieldsValue {
	name: string
	profession: string
	surname: string
	email: string
	phone: string
	address: string
	aboutMe: string
	image: string | ArrayBuffer | null
	education?: IEducation[]
	workPlace?: IWorkPlace[]
	color?: string
	colorTitle?: string
	skills?: string[] | []
}

export const initialFormFields: FormFieldsValue = {
	name: '',
	profession: '',
	surname: '',
	email: '',
	phone: '',
	address: '',
	aboutMe: '',
	education: [],
	workPlace: [],
	skills: [],
	image: null,
}