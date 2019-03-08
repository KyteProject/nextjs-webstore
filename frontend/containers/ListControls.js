import { themeGet } from 'styled-system';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faThList } from '@fortawesome/free-solid-svg-icons';
import Box from '../components/Box';

const ListControls = () => {
	return (
		<Box
			display='flex'
			justifyContent='space-between'
			alignItems='center'
			position='relative'
			m='10px 0'
			borderTop='1px solid #e1e1e1'
			lineHeight='16px'
		>
			<Box display='flex' justifyContent='flex-start' alignItems='center' pt={3}>
				<Box display='block' mr={1}>
					<Link href='#'>
						<a>
							<FontAwesomeIcon icon={faThLarge} size='lg' style={{ color: '#999' }} />
						</a>
					</Link>
				</Box>
				<Box display='block' mr={1}>
					<Link href='#'>
						<a>
							<FontAwesomeIcon
								icon={faThList}
								size='lg'
								style={{ color: themeGet( 'colors.cherryHover' ) }}
							/>
						</a>
					</Link>
				</Box>
			</Box>
			<Box position='relative' maxWidth={4} display='block' pt={3}>
				<select data-placeholder='Default order' className='chosen-select-no-single'>
					<option>Default Sort</option>
					<option>Best Sellers</option>
					<option>Highest Rated</option>
					<option>Best Deals</option>
					<option>Newest Products</option>
				</select>
			</Box>
		</Box>
	);
};

export default ListControls;
