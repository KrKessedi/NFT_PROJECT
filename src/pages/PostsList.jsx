import React, { useEffect, useState } from 'react'
import { usePosts } from '../contexts/PostContextProvider'
import PostCard from '../components/posts/PostCard'
import Pagination from '@mui/material/Pagination'
import '../styles/PostsList.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const lightTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#fff',
		},
	},
})

const PostsList = () => {
	const { posts, getPosts } = usePosts()

	useEffect(() => {
		getPosts()
	}, [])

	console.log(posts)

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

	return (
		<>
			<div className='postsList'>
				{posts ? (
					currentData().map((item) => <PostCard key={item.id} item={item} />)
				) : (
					<h3>Loading...</h3>
				)}
			</div>
			<div
				style={{
					// width: '60vw',
					margin: '2vw auto',
				}}
			>
				<ThemeProvider theme={lightTheme}>
					<Pagination
						count={count}
						page={page}
						onChange={handlePage}
						variant='outlined'
					/>
				</ThemeProvider>
			</div>
		</>
	)
}

export default PostsList
