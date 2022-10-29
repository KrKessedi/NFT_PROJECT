import React, { useState, useContext } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Input } from '@mui/material'
import { postsContext } from '../../contexts/PostContextProvider'
import axios from 'axios'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
}

export default function BasicModal({ item }) {
	const { saveChanges, onePost } = useContext(postsContext)
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	const [comment, setComment] = useState('')
	const [postComment, setPostComment] = useState(null)

	async function saveComment() {
		item.comments.push(comment)
		setPostComment(item.comments)
		let obj = {
			...item,
			comments: postComment,
		}
		await axios.patch(`http://localhost:8000/nfts/${item.id}`, obj)
		// console.log(obj)
		setComment('')
	}

	return (
		<div>
			<Button onClick={handleOpen}>Open modal</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Typography id='modal-modal-title' variant='h6' component='h2'>
						Comments
					</Typography>
					<ul id='modal-modal-description' sx={{ mt: 2 }}>
						{item.comments.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
					<Input value={comment} onChange={(e) => setComment(e.target.value)} />
					<Button onClick={() => saveComment()}>Send</Button>
				</Box>
			</Modal>
		</div>
	)
}
