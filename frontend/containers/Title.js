import Box from '../components/Box';
import Heading from './../components/Heading';
import IconPicker from './../components/IconPicker';

const Title = ( { category } ) => {
	return (
		<Box display='flex' justifyContent='space-between' alignItems='center' position='relative' m='10px 0'>
			<Heading
				fontSize='1.8rem'
				fontFamily='Raleway, sans-serif'
				fontWeight={400}
				lineHeight={1.2}
				width='100%'
				textTransform='uppercase'
				mb={0}
			>
				{category}
			</Heading>
			<Box width='100%' display='flex' alignItems='center' justifyContent='flex-end'>
				<IconPicker cat={category} c='#999' />
			</Box>
		</Box>
	);
};

export default Title;
