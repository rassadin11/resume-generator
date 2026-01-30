import {create} from 'zustand'
import {
  FormFieldsActions,
  FormFieldsValue,
  IEducation,
  IWorkPlace,
} from '../features/Form/Form.interfaces'

export const useZustand = create<FormFieldsValue & FormFieldsActions>(
  set => ({
    name: '',
    profession: '',
    surname: '',
    email: '',
    phone: '',
    address: '',
    aboutMe: '',
    image: null as string | ArrayBuffer | null,
    education: [] as IEducation[],
    workPlace: [] as IWorkPlace[],
    skills: [] as string[],
    drag: false,
    colorPalette: undefined,

    // Actions
    setName: (name: string) => set({name}),
    setProfession: (profession: string) => set({profession}),
    setSurname: (surname: string) => set({surname}),
    setEmail: (email: string) => set({email}),
    setPhone: (phone: string) => set({phone}),
    setAddress: (address: string) => set({address}),
    setAboutMe: (aboutMe: string) => set({aboutMe}),
    setImage: (image: string | ArrayBuffer | null) => set({image}),
    setEducation: (education: IEducation[]) => set({education}),
    setWorkPlace: (workPlace: IWorkPlace[]) => set({workPlace}),
    removeWorkPlace: (workPlace: IWorkPlace[]) => set({workPlace}),
    removeEducationById: (id: number) =>
      set(state => ({
        education: state.education.filter(item => item.id !== id),
      })),
    removeWorkPlaceById: (id: number) =>
      set(state => ({
        workPlace: state.workPlace.filter(item => item.id !== id),
      })),
    setSkills: (skills: string[]) => set({skills}),
    setColorPalette: colorPalette => set({colorPalette}),
    setDrag: (drag: boolean) => set({drag}),
    setField: (
      field: keyof Omit<FormFieldsValue, 'color' | 'colorTitle'>,
      value: any,
    ) =>
      set((state: FormFieldsValue) => ({...state, [field]: value})),
    resetForm: () =>
      set({
        name: '',
        profession: '',
        surname: '',
        email: '',
        phone: '',
        address: '',
        aboutMe: '',
        image: null,
        education: [],
        workPlace: [],
        skills: [],
        colorPalette: undefined,
      }),
  }),
)
