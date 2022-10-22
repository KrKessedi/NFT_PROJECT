import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom'

// const pages = ['Nfts', 'Basket']

const pages = [
	{
		type: 'Nfts',
		path: '/list',
	},
	{
		type: 'Basket',
		path: '/basket',
	},
	{
		type: 'Add',
		path: '/add',
	},
]

function ResponsiveAppBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null)
	const [anchorElUser, setAnchorElUser] = React.useState(null)

	const navigate = useNavigate()

	const handleOpenNavMenu = event => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = event => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	return (
		<>
			<AppBar position='static' className='navbar'>
				<Container maxWidth='xl'>
					<Toolbar disableGutters>
						<CurrencyBitcoinIcon />
						<Typography
							onClick={() => navigate('/')}
							className='glitch'
							variant='h6'
							noWrap
							component='a'
							href='/'
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								// fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							NFT
						</Typography>

						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleOpenNavMenu}
								color='inherit'
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
								}}
							>
								{pages.map(page => (
									<MenuItem key={page.type} onClick={handleCloseNavMenu}>
										<Typography
											textAlign='center'
											onClick={() => navigate(page.path)}
										>
											{page.type}
										</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
						{/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
						<Typography
							variant='h5'
							noWrap
							component='a'
							href=''
							sx={{
								mr: 2,
								display: { xs: 'flex', md: 'none' },
								flexGrow: 1,
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							NFT
						</Typography>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							{pages.map(page => (
								<Button
									key={page.type}
									onClick={() => navigate(page.path)}
									sx={{ my: 2, color: 'white', display: 'block' }}
								>
									{page.type}
								</Button>
							))}
						</Box>

						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title='Open settings'>
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: '45px' }}
								id='menu-appbar'
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								<MenuItem
									id='app'
									className='menu-items'
									onClick={handleCloseUserMenu}
								>
									<Typography
										className='glitch'
										onClick={() => navigate('/reg')}
									>
										Register
									</Typography>
								</MenuItem>
								<MenuItem
									id='app'
									className='menu-items'
									onClick={handleCloseUserMenu}
								>
									<Typography
										className='glitch'
										onClick={() => navigate('/login')}
									>
										Login
									</Typography>
								</MenuItem>
								<MenuItem
									id='app'
									className='menu-items'
									onClick={handleCloseUserMenu}
								>
									<Typography className='glitch'>Logout</Typography>
								</MenuItem>
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	)
}
export default ResponsiveAppBar
