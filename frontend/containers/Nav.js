import React from 'react';
import styled from 'styled-components';
import {
	faShoppingBag,
	faMoneyBillWave,
	faUser,
	faShoppingBasket,
	faHome,
	faSearch
} from '@fortawesome/free-solid-svg-icons';
import { themeGet } from 'styled-system';
import NavLink from '../components/NavLink';

const Navigation = styled.nav`
		li {
			width: 80px;
			height: 80px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		a {
			color: ${themeGet( 'colors.text' )};

			:hover {
				color: ${themeGet( 'colors.cherryHover' )};
			}
		}
	`,
	BottomNav = styled.ul`
		position: absolute;
		bottom: 80px;
		padding: 0;
	`,
	Nav = () => (
		<Navigation role='navigation'>
			<ul>
				<NavLink href='/home' alt='Home' icon={faHome} />
				<NavLink href='/products' alt='Shop' icon={faShoppingBag} />
				<NavLink href='/orders' alt='Orders' icon={faMoneyBillWave} />
				<NavLink href='/search' alt='Search' icon={faSearch} />
				<NavLink href='/cart' alt='Shopping Cart' icon={faShoppingBasket} />
			</ul>
			<BottomNav>
				<NavLink href='/user' alt='User Details' icon={faUser} />
			</BottomNav>
		</Navigation>
	);

export default Nav;
