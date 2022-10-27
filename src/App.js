import React from 'react'
import MainRoutes from './MainRoutes'
import Navbar from './components/Navbar'
import AuthContextProvider from './contexts/AuthContextProvider'
import PostContextProvider from './contexts/PostContextProvider'
import BasketContextProvider from './contexts/BasketContextProvider'
import FavoriteContextProvider from './contexts/FavoriteContext'

const App = () => {
	return (
		<FavoriteContextProvider>
			<BasketContextProvider>
				<AuthContextProvider>
					<PostContextProvider>
						<Navbar />
						<MainRoutes />
					</PostContextProvider>
				</AuthContextProvider>
			</BasketContextProvider>
		</FavoriteContextProvider>
	)
}

export default App
