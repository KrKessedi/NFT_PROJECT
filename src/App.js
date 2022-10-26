import React from 'react'
import MainRoutes from './MainRoutes'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'

const App = () => {
	return (
		<>
			<Cursor />
			<Navbar />
			<MainRoutes />
		</>
	)
}

export default App
