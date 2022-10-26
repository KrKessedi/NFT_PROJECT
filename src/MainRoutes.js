import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreatePostPage from './pages/CreatePostPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'
import Basket from './components/posts/Basket'
import PostList from './pages/PostsList'
<<<<<<< HEAD
import DrawNFTPage from './pages/DrawNFTPage'
=======
import PostDetails from './components/posts/PostDetails'
>>>>>>> d0cf46f5eefc4f545555704d589bb945323eb20e

const MainRoutes = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='*' element={<NotFoundPage />} />
				<Route path='/add' element={<CreatePostPage />} />
				<Route path='/reg' element={<RegistrationPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/basket' element={<Basket />} />
				<Route path='/list' element={<PostList />} />
<<<<<<< HEAD
				<Route path='/draw-nft' element={<DrawNFTPage />} />
=======
				<Route path='/details/:id' element={<PostDetails />} />
>>>>>>> d0cf46f5eefc4f545555704d589bb945323eb20e
			</Routes>
		</>
	)
}

export default MainRoutes
