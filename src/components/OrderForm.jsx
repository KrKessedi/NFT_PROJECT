import React, { useState, useContext } from 'react'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import TextsmsTwoToneIcon from '@mui/icons-material/TextsmsTwoTone'
import { Box } from '@mui/material'
import { Input } from '@mui/material'
import { useBasket } from '../contexts/BasketContextProvider'
import '../styles/orderForm.css'

const OrderForm = () => {
	const { getBasket } = useBasket()

	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [addres, setAddres] = useState('')

	function basketCleaner() {
		localStorage.removeItem('basket')
		alert('The order has been placed')
		getBasket()
		handleClose()
	}

	return (
		<div>
			<Button
				onClick={handleOpen}
				color='success'
				variant='contained'
				style={{ marginLeft: '1vw', marginRight: '2.6vw' }}
			>
				Buy now
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
				style={{
					width: '30vw',
					height: '300px',
					margin: '10vw auto',
					background: 'rgb(0,0,0,.97)',
					borderRadius: '1vw',
				}}
			>
				<Box style={{ width: '50%', margin: 'auto' }}>
					<div
						style={{
							width: '90%',
							display: 'flex',
							flexDirection: 'column',
							marginTop: '3vw',
						}}
					>
						<Input
							required
							className='orderInput'
							color='secondary'
							type='text'
							placeholder='Enter your EMail'
							style={{
								marginBottom: '2vw',
								backgroundColor: 'rgb(255,255,255, .2)',
								borderRadius: '.3vw .3vw 0 0',
								color: 'white',
								paddingLeft: '2vw',
							}}
						/>
						<Input
							required
							className='orderInput'
							color='secondary'
							type='text'
							placeholder='Enter your phone'
							style={{
								marginBottom: '2vw',
								backgroundColor: 'rgb(255,255,255, .2)',
								borderRadius: '.3vw .3vw 0 0',
								color: 'white',
								paddingLeft: '2vw',
							}}
						/>
						<Input
							required
							className='orderInput'
							color='secondary'
							type='text'
							placeholder='Enter your addres'
							style={{
								marginBottom: '2vw',
								backgroundColor: 'rgb(255,255,255, .2)',
								borderRadius: '.3vw .3vw 0 0',
								color: 'white',
								paddingLeft: '2vw',
							}}
						/>
						<button
							tybe='submit'
							style={{ background: 'white', color: 'black' }}
							onClick={basketCleaner}
						>
							Buy
						</button>
					</div>
				</Box>
			</Modal>
		</div>
	)
}

export default OrderForm
