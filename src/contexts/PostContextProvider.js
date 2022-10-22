import React, { createContext, useContext, useReducer } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const postsContext = createContext()
export const usePosts = useContext(postsContext)

let API_NFT = 'http://localhost:8000/nfts'

const INIT_STATE = {
	posts: [],
	onePost: null,
}

const reducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case 'GET_POSTS':
			return { ...state, posts: action.payload }
		case 'GET_ONE_POST':
			return { ...state, onePost: action.payload }
		default:
			return state
	}
}

export const PostContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INIT_STATE)

	let navigate = useNavigate()

	// add Post

	async function addPost(newPost) {
		await axios.post(API_NFT, newPost)

		getPosts()
	}

	async function getPosts() {
		const { data } = await axios(`${API_NFT}/${window.location.search}`)

		dispatch({
			type: 'GET_POSTS',
			payload: data,
		})
	}

	// values

	const values = {
		addPost,
		getPosts,

		posts: state.posts,
		onePost: state.onePost,
	}

	return (
		<postsContext.Provider values={values}>{children}</postsContext.Provider>
	)
}
