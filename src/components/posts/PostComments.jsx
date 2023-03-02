import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Input } from '@mui/material'
import { usePosts } from '../../contexts/PostContextProvider'
import SendIcon from '@mui/icons-material/Send'
import axios from 'axios'

export default function PostComments({ item }) {
	const { modal, changeModalFlag, getPosts, onePost } = usePosts()
	item = onePost
	const [comment, setComment] = useState('')
	useEffect(() => {
		getPosts()
	}, [saveComment])
	// const [postComments, setPostComments] = useState(item.comments)
	const postComments = useRef(item.comments)
	const handleComm = () => {
		// setPostComments([...postComments, comment])
		// item.comments.push(comment)
		postComments.current = [...postComments.current, comment]
		saveComment()
	}

	// useEffect(() => {
	// 	saveComment()
	// }, [postComments])

	async function saveComment() {
		onePost.comments.push(comment)
		console.log(postComments)
		try {
			await axios.patch(
				`https://vercel-json-server-inky.vercel.app/nfts/${item.id}`,
				{
					comments: postComments.current,
				}
			)
			console.log(postComments)
		} catch (e) {
			console.log(e.message)
		}
		setComment('')
	}

	return (
		<div>
			<Modal
				key={item.id}
				open={modal}
				onClose={() => changeModalFlag(false, item)}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<div
					style={{
						backgroundPositionY: '10%',
						margin: '10vw auto',
						width: '600px',
						// height: '40vw',
						// padding: '3vw',
					}}
				>
					<Box
						style={{
							backgroundColor: '#191a1e',
							color: 'white',
							width: '100%',
							height: '100%',
							// top: '50%',
							left: '50%',
							padding: '4vw',
							borderRadius: '2vw',
						}}
					>
						<Typography id='modal-modal-title' variant='h6' component='h2'>
							Comments
						</Typography>
						<br />
						<ul id='modal-modal-description' sx={{ mt: 2 }}>
							{item.comments.map((elem, i) => (
								<div key={i}>
									<li>{elem}</li>
									<hr style={{ width: '200px', margin: '1px' }} />
								</div>
							))}
						</ul>
						<br />
						<Input
							placeholder='message'
							value={comment}
							color='secondary'
							className='comment-input'
							onChange={e => {
								setComment(e.target.value)
							}}
						/>
						<Button
							variant='contained'
							color='success'
							onClick={handleComm}
							endIcon={<SendIcon />}
						>
							Send
						</Button>
					</Box>
				</div>
			</Modal>
		</div>
	)
}
