import { useTheme } from '@mui/material'
import { Box, Typography } from '@mui/material'
import { shades } from '../../theme'


const Footer = () => {
	const {
		palette: { neutral },
	} = useTheme();

	return (
		<Box mt='70px' p='40px 0' backgroundColor={neutral.light}>
			<Box
				width='80%'
				margin='auto'
				display='flex'
				justifyContent='space-between'
				flexWrap='wrap'
				rowGap='30px'
				columnGap='clamp(20px, 30px, 40px)'
			>

				<Box width='clamp(20%, 30%, 40%)'>
					<Typography
						variant='h4'
						fontWeight='bold'
						mb='30px'
						color={shades.secondary[500]}
					>
						PRESH
					</Typography>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatem, quidem eaque fuga consequatur nisi consequuntur ratione suscipit illo dolorum harum assumenda delectus quas sapiente? Repellat impedit non quis itaque!
					</div>
				</Box>

				<Box>
					<Typography variant='h4' fontWeight='bold' mb='30px'>
						About Us
					</Typography>
					<Typography mb='30px'>Careers</Typography>
					<Typography mb='30px'>Our Stores</Typography>
					<Typography mb='30px'>Terms & Conditions</Typography>
					<Typography mb='30px'>Privacy Policy</Typography>
				</Box>

				<Box>
					<Typography variant='h4' fontWeight='bold' mb='30px'>
						Customer Care
					</Typography>
					<Typography mb='30px'>Help Center</Typography>
					<Typography mb='30px'>Track Your Orders</Typography>
					<Typography mb='30px'>Corporate & Bulk Purchasing</Typography>
					<Typography mb='30px'>Returns & Refunds</Typography>
				</Box>

				<Box width='clamp(20%, 25%, 30%'>
					<Typography variant='h4' fontWeight='bold' mb='30px'>
						Contact Us
					</Typography>
					<Typography mb='30px'>No 3 Solomon Adeniran Street, Badagry, Lagos</Typography>
					<Typography mb='30px'>Email: ikpaprecious2@gmail.com</Typography>
					<Typography mb='30px'>+(234)-816-739-4074</Typography>
				</Box>


			</Box>
		</Box>
	)
}

export default Footer