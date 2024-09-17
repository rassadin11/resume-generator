import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import MainPage from './pages/MainPage/MainPage.tsx'
import ResumePage from './pages/ResumeColorsPage/ResumeColorsPage.tsx'
import PreviewPage from './pages/PreviewPage/PreviewPage.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/choose-theme',
		element: <ResumePage />,
	},
	{
		path: '/resume-result',
		element: <PreviewPage />,
	},
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
