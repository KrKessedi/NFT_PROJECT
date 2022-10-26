import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreatePostPage from './pages/CreatePostPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import RegistrationPage from './pages/RegistrationPage'
import Navbar from './components/Navbar'
import LoginPage from './pages/LoginPage'
import Basket from './components/posts/Basket'
import PostList from './pages/PostsList'
import PostDetails from './components/posts/PostDetails'

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
				<Route path='/details/:id' element={<PostDetails />} />
			</Routes>
		</>
	)
}

export default MainRoutes
