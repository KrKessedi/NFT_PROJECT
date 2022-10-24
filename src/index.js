import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import ProductList from './pages/PostsList'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)
