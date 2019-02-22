import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Heading from '../components/Heading';
import Link from 'next/link';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

const A = styled.a`
		padding: 0.5rem 1rem;
		background: ${themeGet( 'colours.red', 'red' )};
		color: ${themeGet( 'colours.white', 'white' )};
		text-transform: uppercase;
		text-decoration: none;

		@media (max-width: 1300px) {
			margin: 0;
			text-align: center;
		}
	`,
	Header = ( { title } ) => (
		<React.Fragment>
			<div className='bar'>
				<Heading {...title}>
					<Link href='/'>
						<A>Ukemi Store</A>
					</Link>
				</Heading>
				<Nav />
			</div>
			<div className='sub-bar'>
				<p>Search</p>
			</div>
			<div className='cart'>
				<p>Cart</p>
			</div>
		</React.Fragment>
	);

export default Header;

Header.propTypes = {
	title: PropTypes.object
};

Header.defaultProps = {
	title: {
		as: 'h1',
		ml: '2rem',
		position: 'relative',
		zIndex: 2,
		transform: 'skew(-7deg)'
	}
};
