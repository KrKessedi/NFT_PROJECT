import React from 'react'
import MainRoutes from './MainRoutes'
import Navbar from './components/Navbar'
<<<<<<< HEAD
import Cursor from './components/Cursor'

const App = () => {
	return (
		<>
			<Cursor />
			<Navbar />
			<MainRoutes />
		</>
=======
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
>>>>>>> d0cf46f5eefc4f545555704d589bb945323eb20e
	)
}

export default App
