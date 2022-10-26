import React from 'react'
import { useParams } from 'react-router-dom'
import { usePosts } from '../../contexts/PostContextProvider'
import { useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import '../../styles/PostDetails.css'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import EditIcon from '@mui/icons-material/Edit'
import InfoIcon from '@mui/icons-material/Info'

const PostDetails = () => {
	const { id } = useParams()

	const { getOnePost, onePost } = usePosts()

	// setTimeout(function () {
	// 	useEffect(() => {
	// 		getOnePost(id)
	// 	}, [])
	// }, 1000)

	useEffect(() => {
		setTimeout(() => {
			getOnePost(id)
		}, 1000)
	}, [])

	return (
		<div className='post-detail'>
			{onePost ? (
				<div className='card-in-detail'>
					<Card
						sx={{ display: 'flex', maxWidth: '70vw', margin: ' 2vw auto' }}
						style={{
							border: '2px solid black',
							padding: '1.7vw',
							position: 'relative',
							borderRadius: '1vw',
							clipPath:
								'polygon(4% 0%, 100% 0, 100% 35%, 100% 100%, 42% 100%, 38% 95%, 30% 95%, 26% 100%, 0 100%, 0 10%)',
							// boxShadow,

							// fontSize: '50px',
						}}
					>
						<Box
							sx={{ display: 'flex', flexDirection: 'column' }}
							style={{ fontSize: '2em' }}
						>
							<CardContent>
								<Typography
									style={{ fontSize: '1.3em' }}
									gutterBottom
									variant='h5'
									component='div'
								>
									Author: {onePost.author}
								</Typography>
								<br />

								<Typography
									variant='body2'
									style={{ fontSize: '20px' }}
									color='text.secondary'
								>
									{onePost.description}
								</Typography>
								<br />
								<Typography
									variant='body2'
									color='text.dark'
									style={{ fontSize: '40px' }}
								>
									Price: {onePost.price}$
								</Typography>
							</CardContent>
						</Box>
						<Button
							className='addToBasket'
							style={{ boxShadow: ' 0 4px 5px black' }}
							// onClick={() => addProductToCart(item)}
							// size='large'
							variant='contained'
							color='success'
							endIcon={<AddShoppingCartIcon />}
						>
							Add to basket
						</Button>
						<CardMedia
							style={{
								borderRadius: '1vw',
								clipPath:
									'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)',
							}}
							component='img'
							image={onePost.image}
							alt={onePost.category}
						/>
					</Card>
				</div>
			) : (
				<div className='preloader' style={{ color: 'aqua' }}>
					<div className='preloader__ring'>
						<div className='preloader__sector'>L</div>
						<div className='preloader__sector'>o</div>
						<div className='preloader__sector'>a</div>
						<div className='preloader__sector'>d</div>
						<div className='preloader__sector'>i</div>
						<div className='preloader__sector'>n</div>
						<div className='preloader__sector'>g</div>
						<div className='preloader__sector'>.</div>
						<div className='preloader__sector'>.</div>
						<div className='preloader__sector'>.</div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
					</div>
					<div className='preloader__ring'>
						<div className='preloader__sector'>L</div>
						<div className='preloader__sector'>o</div>
						<div className='preloader__sector'>a</div>
						<div className='preloader__sector'>d</div>
						<div className='preloader__sector'>i</div>
						<div className='preloader__sector'>n</div>
						<div className='preloader__sector'>g</div>
						<div className='preloader__sector'>.</div>
						<div className='preloader__sector'>.</div>
						<div className='preloader__sector'>.</div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
					</div>
				</div>
			)}
		</div>
	)
}

export default PostDetails
