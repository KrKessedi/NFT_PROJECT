import { useEffect, useState } from 'react'
import MainRoutes from './MainRoutes'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import AuthContextProvider from './contexts/AuthContextProvider'
import PostContextProvider, { usePosts } from './contexts/PostContextProvider'
import BasketContextProvider from './contexts/BasketContextProvider'
import FavoriteContextProvider from './contexts/FavoriteContext'
import PostComments from './components/posts/PostComments'

const App = () => {
	const [mQuery, setMQuery] = useState({
		matches: window.innerWidth > 880 ? true : false,
	})
	useEffect(() => {
		let mediaQuery = window.matchMedia('(max-width: 880px)')
		mediaQuery.addListener(setMQuery)
		return () => mediaQuery.removeListener(setMQuery)
	}, [])
	return (
		<FavoriteContextProvider>
			<BasketContextProvider>
				<AuthContextProvider>
					<PostContextProvider>
						{mQuery && !mQuery.matches ? null : <Cursor />}
						<Navbar />
						<MainRoutes />
					</PostContextProvider>
				</AuthContextProvider>
			</BasketContextProvider>
		</FavoriteContextProvider>
	)
}

export default App
