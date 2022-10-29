import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteIcon from '@mui/icons-material/Favorite'

const Like = () => {
	const [like, setLike] = React.useState(false)

	return (
		<h2 onClick={() => setLike(!like)}>
			Like:
			{like ? (
				<FavoriteIcon color='error' fontSize='large' />
			) : (
				<FavoriteBorderOutlinedIcon sx={{ color: 'black' }} fontSize='large' />
			)}
		</h2>
	)
}

export default Like
