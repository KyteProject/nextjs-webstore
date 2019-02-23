import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faShoppingBag,
	faMoneyBillWave,
	faUser,
	faShoppingBasket,
	faHome,
	faSearch
} from '@fortawesome/free-solid-svg-icons';
import { themeGet } from 'styled-system';

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
				<li>
					<Link href='/home'>
						<a>
							<FontAwesomeIcon icon={faHome} size='2x' />
						</a>
					</Link>
				</li>
				<li>
					<Link href='/items'>
						<a>
							<FontAwesomeIcon icon={faShoppingBag} size='2x' />
						</a>
					</Link>
				</li>
				<li>
					<Link href='/sell'>
						<a>
							<FontAwesomeIcon icon={faMoneyBillWave} size='2x' />
						</a>
					</Link>
				</li>
				<li>
					<Link href='/signup'>
						<a>
							<FontAwesomeIcon icon={faSearch} size='2x' />
						</a>
					</Link>
				</li>
				<li>
					<Link href='/orders'>
						<a>
							<FontAwesomeIcon icon={faShoppingBasket} size='2x' />
						</a>
					</Link>
				</li>
			</ul>
			<BottomNav>
				<li>
					<Link href='/user'>
						<a>
							<FontAwesomeIcon icon={faUser} size='2x' />
						</a>
					</Link>
				</li>
			</BottomNav>
		</Navigation>
	);

export default Nav;
