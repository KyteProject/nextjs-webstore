import Logo from '../components/Logo';
import Box from './../components/Box';
import Nav from './Nav';

const Sidebar = () => (
	<Box
		position='fixed'
		height='100%'
		width={80}
		bg='white'
		boxShadow='2px 0px 2px 0px rgba(0, 0, 0, 0.02)'
		borderRight='1px solid #ededed'
		zIndex={10}
		transition='all 0.3s'
	>
		<Logo />
		<Box height='100%' width='100%' position='relative'>
			<Nav />
		</Box>
	</Box>
);

export default Sidebar;
