import React, { useEffect, useState } from 'react'
import { usePosts } from '../contexts/PostContextProvider'
import PostCard from '../components/posts/PostCard'
import Pagination from '@mui/material/Pagination'
import '../styles/PostsList.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useSearchParams } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import '../styles/adaptive.css/adaptive1.css'

const lightTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#fff',
		},
	},
})

const PostsList = () => {
	const { posts, getPosts, fetchByParams, getCategories, allCategories } =
		usePosts()

	useEffect(() => {
		getPosts()
	}, [])

	const [searchParams, setSearchParams] = useSearchParams()
	const [search, setSearch] = useState(searchParams.get('q') || '')

	useEffect(() => {
		setSearchParams({
			q: search,
		})
	}, [search])

	useEffect(() => {
		getPosts()
		setPage(1)
	}, [searchParams])

	const [page, setPage] = useState(1)

	const itemsOnPage = 6

	const count = Math.ceil(posts.length / itemsOnPage)

	const handlePage = (e, p) => {
		setPage(p)
	}

	function currentData() {
		const begin = (page - 1) * itemsOnPage
		const end = begin + itemsOnPage

		return posts.slice(begin, end)
	}

	useEffect(() => {
		getCategories()
	}, [])

	function unique(arr) {
		let result = []

		for (let str of arr) {
			if (!result.includes(str)) {
				result.push(str)
			}
		}

		return result
	}

	let categories = []

	allCategories.forEach(item => {
		categories.push(item.category)
	})

	let uniqCategory = unique(categories)

	return (
		<>
			<div className='parentList'>
				<div className='editor-field '>
					<div className='editor-field__label-container'>
						<label className='editor-field__label'>Name</label>
					</div>

					<div className='editor-field__container'>
						<input
							autoComplete='off'
							type='text'
							className='editor-field__input'
							value={search}
							onChange={e => setSearch(e.target.value)}
						/>
					</div>
					<span className='editor-field__bottom'></span>
					<div className='editor-field__noise'></div>
				</div>
				<ThemeProvider theme={lightTheme}>
					<FormControl
						className='select'
						variant='filled'
						color=''
						sx={{
							m: 1,
							minWidth: 120,
							zIndex: 10,
							position: 'absolute',
							top: '9vw',
							left: '66vw',
						}}
					>
						<InputLabel id='demo-simple-select-standard-label'>
							Category
						</InputLabel>
						<Select
							labelId='demo-simple-select-standard-label'
							id='demo-simple-select-standard'
							onChange={e => fetchByParams('category', e.target.value)}
							label='Age'
							defaultValue='all'
						>
							<MenuItem value='all'>All</MenuItem>
							{uniqCategory.map(item => (
								<MenuItem key={item} value={item}>
									{item}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</ThemeProvider>

				<div className='postsList'>
					{posts ? (
						currentData().map(item => <PostCard key={item.id} item={item} />)
					) : (
						<h3>Loading...</h3>
					)}
				</div>
				<div
					style={{
						width: '20vw',
						margin: 'auto',
						// position: 'absolute',
						// bottom: '0vw',
					}}
				>
					<ThemeProvider theme={lightTheme}>
						<Pagination
							className='pagination'
							count={count}
							page={page}
							onChange={handlePage}
							variant='outlined'
							sx={{ paddingBottom: '40px' }}
						/>
					</ThemeProvider>
				</div>
			</div>
		</>
	)
}

export default PostsList
