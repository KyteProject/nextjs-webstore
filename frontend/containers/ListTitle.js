import Box from '../components/Box';
import Heading from './../components/Heading';
import IconPicker from '../lib/IconPicker';

const ListTitle = ( { category } ) => {
	return (
		<Box display='flex' justifyContent='space-between' alignItems='center' position='relative' m='10px 0'>
			<Heading
				fontSize='1.8rem'
				fontFamily='Raleway, sans-serif'
				fontWeight={3}
				lineHeight='title'
				width='100%'
				textTransform='uppercase'
				mb={0}
			>
				{category}
			</Heading>
			<Box width='100%' display='flex' alignItems='center' justifyContent='flex-end'>
				<IconPicker cat={category} c='#393939' size='2x' />
			</Box>
		</Box>
	);
};

export default ListTitle;
