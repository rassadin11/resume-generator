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

// initialize zustand store
export interface FormFieldsValue {
  name: string
  profession: string
  surname: string
  email: string
  phone: string
  address: string
  aboutMe: string
  image: string | ArrayBuffer | null
  education: IEducation[]
  workPlace: IWorkPlace[]
  color?: string
  colorTitle?: string
  skills?: string[] | []
  drag?: boolean
}

export interface FormFieldsActions {
  // Actions
  setName: (name: string) => void
  setProfession: (profession: string) => void
  setSurname: (surname: string) => void
  setEmail: (email: string) => void
  setPhone: (phone: string) => void
  setAddress: (address: string) => void
  setAboutMe: (aboutMe: string) => void
  setImage: (image: string | ArrayBuffer | null) => void
  setEducation: (education: IEducation[]) => void
  setWorkPlace: (workPlace: IWorkPlace[]) => void
  setSkills: (skills: string[]) => void
  setDrag: (drag: boolean) => void
  setField: (
    field: keyof Omit<FormFieldsValue, 'color' | 'colorTitle'>,
    value: any,
  ) => void
  resetForm: () => void
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
