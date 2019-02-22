import React from 'react';
import Link from 'next/link';

const Nav = () => (
	<React.Fragment>
		<Link href='/sell'>
			<button as='a'>sell</button>
		</Link>
		<Link href='/'>
			<button as='a'>home</button>
		</Link>
	</React.Fragment>
);

export default Nav;
