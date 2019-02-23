import styled from 'styled-components';
import Link from 'next/link';
import Box from './Box';

const Img = styled.img`
		width: 32px;
		height: 32px;
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
				<Img src='../static/images/logo.svg' alt='Ukemi Store' />
			</Link>
		</Box>
	);

export default Logo;
