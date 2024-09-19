export interface palitra {
	colorInfo?: {
		color: string | undefined
		mainText: string | undefined
		fon: string | undefined
		backgroundColor: string | undefined
		backgroundMainColor: string | undefined
		dateColor: string | undefined
		title: string | undefined
		borderSidebar: string | undefined
		borderMain: string | undefined
	}
}

interface Color {
	showColor: string
	color: string
	mainText: string
	backgroundColor: string
	dateColor: string
	backgroundMainColor: string
	title: string
	borderSidebar: string
	borderMain: string
	fon: string
}

export const colors: Color[] = [
	{
		showColor: 'linear-gradient(-135deg, rgb(0, 8, 83), rgb(28, 181, 224))',
		fon: 'linear-gradient(-135deg, rgb(0, 8, 83), rgb(28, 181, 224))',
		color: '#fff',
		mainText: '#000',
		backgroundColor:
			'linear-gradient(-135deg, rgb(0, 8, 83), rgb(28, 181, 224))',
		backgroundMainColor: '#fff',
		dateColor: '#000',
		title: 'Небо',
		borderSidebar: 'transparent',
		borderMain: 'rgb(28, 181, 224)',
	},
	{
		showColor: 'linear-gradient(45deg, #b94083 0%, #fc3464 100%)',
		fon: 'linear-gradient(45deg, #b94083 0%, #fc3464 100%)',
		color: '#fff',
		mainText: '#000',
		backgroundColor: 'linear-gradient(45deg, #b94083 0%, #fc3464 100%)',
		backgroundMainColor: '#fff',
		dateColor: '#fc3464',
		title: 'Красный закат',
		borderSidebar: 'transparent',
		borderMain: '#fc3464',
	},
	{
		showColor:
			'linear-gradient(45deg, rgba(225,111,193,1) 0%, rgba(140,95,240,1) 100%)',
		fon: 'linear-gradient(45deg, rgba(225,111,193,1) 0%, rgba(140,95,240,1) 100%)',
		color: '#fff',
		mainText: '#000',
		backgroundColor:
			'linear-gradient(45deg, rgba(225,111,193,1) 0%, rgba(140,95,240,1) 100%)',
		backgroundMainColor: '#fff',
		dateColor: '#000',
		title: 'Пурпурный',
		borderSidebar: 'transparent',
		borderMain: 'rgba(140,95,240,1)',
	},
	{
		showColor:
			'linear-gradient(90deg, rgba(40,42,54,1) 0%, rgba(9,9,12,1) 100%)',
		fon: 'linear-gradient(-90deg, rgba(40,42,54,1) 0%, rgba(9,9,12,1) 100%)',
		color: '#fff',
		mainText: '#fff',
		backgroundColor: 'transparent',
		backgroundMainColor:
			'linear-gradient(90deg, rgba(40,42,54,1) 0%, rgba(9,9,12,1) 100%)',
		dateColor: '#fff',
		title: 'Total Black',
		borderSidebar: '#fff',
		borderMain: '#fff',
	},
	{
		showColor: 'linear-gradient(45deg, #e0b6af,#cdbec1,#c7cede,#aeb2bb,#83898f)',
		fon: 'linear-gradient(45deg, #e0b6af,#cdbec1,#c7cede,#aeb2bb,#83898f)',
		color: '#000',
		mainText: '#000',
		backgroundColor: 'transparent',
		backgroundMainColor:
			'linear-gradient(45deg, #e0b6af,#cdbec1,#c7cede,#aeb2bb,#83898f)',
		dateColor: '#fff',
		title: 'Серебро',
		borderSidebar: '#fff',
		borderMain: '#fff',
	},
]