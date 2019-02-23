import styled from 'styled-components';
import Link from 'next/link';
import Box from './Box';

const Img = styled.img`
		width: 65px;
		height: 65px;
	`,
	Logo = () => (
		<Box
			width={80}
			height={80}
			display='flex'
			alignItems='center'
			justifyContent='center'
			borderRight='1px solid #ededed'
		>
			<Link href='/'>
				<Img src='../static/images/logo.svg' alt='Unicorn Store' />
			</Link>
		</Box>
	);

export default Logo;
