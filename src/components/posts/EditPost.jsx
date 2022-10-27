import React, { useState, useEffect } from 'react'
import '../../styles/EditPost.css'
import { usePosts } from '../../contexts/PostContextProvider'
import { useNavigate, useParams } from 'react-router-dom'

const EditPost = () => {
	const { getOnePost, onePost, saveChanges } = usePosts()
	const [post, setPost] = useState(onePost)

	const navigate = useNavigate()
	const { id } = useParams()

	console.log(post)

	useEffect(() => {
		getOnePost(id)
	}, [])

	useEffect(() => {
		setTimeout(() => {
			setPost(onePost)
		}, 1999)
	}, [onePost])

	function handleEdit(e) {
		console.log(e.target.name)
		let obj = {
			...post,
			[e.target.name]: e.target.value,
		}

		setPost(obj)
	}

	return (
		<>
			{post ? (
				<div className='edit-page'>
					<div className='edit-container on'>
						<div className='screen'>
							<div className='box--outer'>
								<div className='box'>
									<div className='box--inner'>
										<div className='edit-content'>
											<div className='holder'>
												<br />
												<br />
												<div className='row'>
													<div className='col col__left label'>Picture</div>
													<div className='col col__center'>
														{/* <input
                        autoComplete='off' type='text' id='login' maxlength='32' readonly /> */}
														<input
															autoComplete='off'
															className='rows'
															type='text'
															// style='text-align:center ;'
															id='login'
															// name='password'
															name='image'
															placeholder=''
															data-error=''
															// maxlength='32'
															// autoFocus='true'
															value={post.image}
															onChange={handleEdit}
														/>
													</div>
												</div>
												{/* <div className='row'>
											<div className='col col__left label'>Author</div>
											<div className='col col__center'>
												<input
													autoComplete='off'
													className='rows'
													type='text'
													id='login'
													name='author'
													placeholder=''
													data-error=''
													// maxlength='32'
													// autoFocus='true'
													value={post.author}
													onChange={handleEdit}
												/>
											</div>
										</div> */}
												<div className='row'>
													<div className='col col__left label'>Name</div>
													<div className='col col__center'>
														{/* <input
                        autoComplete='off' type='text' id='login' maxlength='32' readonly /> */}
														<input
															autoComplete='off'
															className='rows'
															type='text'
															// style='text-align:center ;'
															id='login'
															name='name'
															placeholder=''
															data-error=''
															// maxlength='32'
															// autoFocus='true'
															value={post.title}
															onChange={handleEdit}
														/>
													</div>
												</div>
												<div className='row'>
													<div className='col col__left label'>Description</div>
													<div className='col col__center'>
														{/* <input
                        autoComplete='off' type='text' id='login' maxlength='32' readonly /> */}
														<input
															autoComplete='off'
															className='rows'
															type='text'
															// style='text-align:center ;'
															id='login'
															name='description'
															placeholder=''
															data-error=''
															// maxlength='32'
															// autoFocus='true'
															value={post.description}
															onChange={handleEdit}
														/>
													</div>
												</div>
												<div className='row'>
													<div className='col col__left label'>Category</div>
													<div className='col col__center'>
														{/* <input
                        autoComplete='off' type='text' id='login' maxlength='32' readonly /> */}
														<input
															autoComplete='off'
															className='rows'
															type='text'
															// style='text-align:center ;'
															id='login'
															name='category'
															placeholder=''
															data-error=''
															// maxlength='32'
															// autoFocus='true'
															value={post.category}
															onChange={handleEdit}
														/>
													</div>
												</div>
												<div className='edit-form'>
													<div className='row'>
														<div className='col col__left label'>Price</div>
														<div className='col col__center '>
															<input
																autoComplete='off'
																className='rows'
																// style='text-align:center;   '
																type='text'
																id='password'
																name='price'
																placeholder=''
																data-error=''
																// maxlength='32'
																// autoFocus='true'
																value={post.price}
																onChange={handleEdit}
															/>
														</div>
														<button
															onClick={() => {
																saveChanges(post)
																navigate('/list')
															}}
															className='rows save-btn'
															type='submit'
															id='submit'
															// name='submit'
															style={{
																// marginRight: '-9.8vw',
																marginLeft: '-9.8vw',
															}}
														>
															[Save]
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div
					className='preloader'
					style={{ marginTop: '13vw', color: 'black' }}
				>
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
		</>
	)
}

export default EditPost
