import React, { useEffect } from 'react'
import { usePosts } from '../contexts/PostContextProvider'
import PostCard from '../components/posts/PostCard'
import '../styles/PostsList.css'

const PostsList = () => {
	const { posts, getPosts } = usePosts()

	useEffect(() => {
		getPosts()
	}, [])

	console.log(posts)

	return (
		<div className='postsList'>
			{posts ? (
				posts.map(item => <PostCard key={item.id} item={item} />)
			) : (
				<h3>Loading...</h3>
			)}
		</div>
	)
}

export default PostsList
