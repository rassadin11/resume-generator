import s from './Form.module.scss'

export interface FormItem {
    id: number
    name: string
    title: string
    placeholder: string
    class: string
    type: "number" | "text" | "email" | "password" | "date" | "tel"
}

export const FormData: FormItem[] = [
    {
        id: 1,
        name: 'name',
        title: 'Имя',
        placeholder: 'Имя',
        type: 'text',
        class: s.second
    },
    {
        id: 2,
        name: 'surname',
        title: "Фамилия",
        placeholder: "Фамилия",
        type: 'text',
        class: s.third
    },
    {
        id: 3,
        name: 'email',
        title: "Email",
        placeholder: "test@gmail.com",
        type: 'email',
        class: s.fourth
    },
    {
        id: 4,
        name: 'phone',
        title: "Номер телефона",
        placeholder: "89381014068",
        type: 'tel',
        class: s.fifth
    },
    {
        id: 5,
        name: 'address',
        title: "Адрес",
        placeholder: "Санкт-Петербург",
        type: 'text',
        class: s.sixth
    },
    {
        id: 6,
        name: 'profession',
        title: "Профессия",
        placeholder: "Front-end разработчик",
        type: 'text',
        class: s.seventh
    }
]