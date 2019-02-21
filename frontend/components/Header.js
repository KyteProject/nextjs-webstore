import React from 'react';
import Nav from './Nav';

const Header = () => (
	<React.Fragment>
		<div className='bar'>
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
