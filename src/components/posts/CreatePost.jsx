import React, { useContext, useEffect, useState } from 'react'
import '../../styles/CreatePost.css'
import { useNavigate } from 'react-router'
import { postsContext, usePosts } from '../../contexts/PostContextProvider'

const CreatePost = () => {
	const { imageUrl } = useContext(postsContext)
	// console.log(props.imageUrl)
	console.log(imageUrl, 'image')
	const navigate = useNavigate()
	const { addPost } = usePosts()

	const [product, setProduct] = useState({
		author: JSON.parse(window.localStorage.getItem('username')),
		title: '',
		description: '',
		price: '',
		image: imageUrl,
		category: 'white',
	})

	console.log(product.image, 'sdf')

	// useEffect(() => {
	// 	console.log(imageUrl, 'state')
	// }, [])

	const handleInp = (e) => {
		if (e.target.name === 'price') {
			let obj = {
				...product,
				[e.target.name]: Number(e.target.value),
			}
			setProduct(obj)
		} else {
			let obj = {
				...product,
				[e.target.name]: e.target.value,
			}
			setProduct(obj)
		}
	}
	return (
		<div className='create-block'>
			<div className='column p-1'>
				<h2 className='play-once'>Create NFT</h2>
				<div className='create-block__inner'>
					<div>
						<div className='field'>
							<label className='glow text'>Title</label>
							<input
								type='text'
								name='title'
								className='input2'
								onChange={handleInp}
							/>
						</div>
						<div className='field'>
							<label className='glow text'>Category</label>
							<select className='select2' name='category' onChange={handleInp}>
								<option value='white'>white</option>
								<option value='black'>black</option>
							</select>
						</div>
						<div className='field'>
							<div className='field w-24' data-unit='$'>
								<label className='glow text price-text'>Price</label>
								<input
									type='text'
									name='price'
									onChange={handleInp}
									className='input2 price2'
								/>
							</div>
						</div>
					</div>
					<div className='field w-24'>
						<label className='glow text'>URL</label>
						<div>
							<input
								className='input2 url2'
								name='image'
								value={imageUrl}
								onChange={handleInp}
							/>
							<button className='yellow' onClick={() => navigate('/draw-nft')}>
								Draw
							</button>
						</div>
					</div>
				</div>
				<div className='flex row w-100 justify-space-between flex-wrap'></div>
				<div className='yellow mb-1'>
					<div className='flex row w-100 justify-space-between'>
						<div className='field w-24'>
							<label className='glow text'>Description</label>
							<input
								type='text'
								name='description'
								onChange={handleInp}
								className='input2 desc2'
							/>
						</div>
					</div>
				</div>
				<h2></h2>
				<div className='flex row mt-1'>
					<button
						className='green'
						onClick={() => {
							addPost(product)
							navigate('/')
						}}
					>
						Accept
					</button>
				</div>
			</div>
		</div>
	)
}

export default CreatePost
