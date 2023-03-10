import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import EditIcon from '@mui/icons-material/Edit'
import InfoIcon from '@mui/icons-material/Info'
import '../../styles/PostCard.css'
import { usePosts } from '../../contexts/PostContextProvider'
import { useBasket } from '../../contexts/BasketContextProvider'
import { useFav } from '../../contexts/FavoriteContext'
import Like from './Like'
import CommentsModal from './PostComments'
import BookmarkTwoToneIcon from '@mui/icons-material/BookmarkTwoTone'
import BookmarksTwoToneIcon from '@mui/icons-material/BookmarksTwoTone'
import ChatTwoToneIcon from '@mui/icons-material/ChatTwoTone'

const PostCard = ({ item }) => {
	const [favorite, setFavorite] = useState(false)

	const { deletePost, modal, changeModalFlag } = usePosts()
	const { addPostToBasket } = useBasket()
	const { addPostToFavorite, deletePostInFavorite } = useFav()
	// console.log(modal)
	const navigate = useNavigate()

	return (
		<Card
			style={{
				boxShadow: 'none',
				background: 'rgb(29	30	34	)',
				width: '400px',
				borderRadius: '20px',
				color: 'white',
				marginBottom: '2vw',
			}}
		>
			<div className='card__inner'>
				<CardMedia
					className='card-image'
					style={{
						borderRadius: '1vw',
						background: '#000',
						// width: '23vw',
						// height: '20vw',
						margin: '0 auto',
					}}
					component='img'
					alt={item.image}
					// height='140'
					image={item.image}
				/>
				<div className='card__inner2'>
					<div className='card__inner-text'>
						<div className='author-text'>{item.author}</div>

						<div>Title: {item.title}</div>

						<div>Price: {item.price}$</div>
					</div>
					<div className='card-icons'>
						<Like />
						<ChatTwoToneIcon
							variant='outlined'
							onClick={() => {
								changeModalFlag(!modal, item)
							}}
							style={{ width: '35px', height: '35px' }}
							sx={{ color: '#2e4c68' }}
						/>
						<div
							style={{ color: 'black' }}
							onClick={() => setFavorite(!favorite)}
						>
							{favorite ? (
								<BookmarksTwoToneIcon
									fontSize='large'
									className='addToFavorite'
									onClick={() => deletePostInFavorite(item.id)}
									sx={{ color: '#ffffff' }}
								/>
							) : (
								<BookmarkTwoToneIcon
									fontSize='large'
									onClick={() => addPostToFavorite(item)}
									className='addToFavorite'
									sx={{ color: '#818181' }}
								/>
							)}
						</div>
					</div>
				</div>

				<div className='btn-block'>
					<Button
						sx={{ fontSize: '10px' }}
						style={{ boxShadow: ' 0 4px 5px black' }}
						onClick={() => navigate(`/edit/${item.id}`)}
						variant='contained'
						color='warning'
						size='small'
						// endIcon={<EditIcon />}
					>
						<EditIcon />
					</Button>

					<Button
						style={{ boxShadow: ' 0 4px 5px black' }}
						onClick={() => navigate(`/details/${item.id}`)}
						variant='contained'
						size='small'
						// endIcon={<InfoIcon />}
					>
						<InfoIcon />
					</Button>
					<Button
						style={{ boxShadow: ' 0 4px 5px black' }}
						onClick={() => deletePost(item.id)}
						size='small'
						variant='contained'
						color='error'
						// endIcon={<DeleteIcon />}
					>
						<DeleteIcon />
					</Button>
					<Button
						style={{ boxShadow: ' 0 4px 5px black' }}
						onClick={() => addPostToBasket(item)}
						size='small'
						variant='contained'
						color='success'
						// endIcon={<AddShoppingCartIcon />}
					>
						<AddShoppingCartIcon />
					</Button>
					{/* <BootstrapButton /> */}
				</div>
			</div>
		</Card>
	)
}

export default PostCard
