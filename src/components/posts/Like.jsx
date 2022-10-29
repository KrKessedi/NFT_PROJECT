import React from 'react'

const Like = () => {
	const [like, setLike] = React.useState(false)

	return <h2 onClick={() => setLike(!like)}>like: {like ? '🤍' : '❤️'}</h2>
}

export default Like
