import React from 'react'
import MainRoutes from './MainRoutes'
import Navbar from './components/Navbar'
import AuthContextProvider from './contexts/AuthContextProvider'
import PostContextProvider from './contexts/PostContextProvider'

const App = () => {
	return (
		<AuthContextProvider>
			<PostContextProvider>
				<Navbar />
				<MainRoutes />
			</PostContextProvider>
		</AuthContextProvider>
	)
}

export default App
