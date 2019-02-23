import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

const Navigation = styled.nav`
		ul {
			list-style: none;
			display: flex;
			margin: 0;
			padding: 0;
			flex-direction: row;
		}
		a {
			display: inline-block;
			text-decoration: none;
			text-transform: uppercase;
			letter-spacing: 5px;
			font-family: Futura, Trebuchet MS, Arial, sans-serif;
			color: ${themeGet( 'colors.white', '#fff' )};
			text-align: center;
			padding: 20px;
			transition: background 0.25s, box-shadow 0.15s;
			&:hover {
				color: #4a4860;
				background: #ffc4eb;
				box-shadow: 0px 4px 0px 0px #bb8eac;
			}
		}
	`,
	Nav = () => (
		<Navigation role='navigation'>
			<ul>
				<li>
					<Link href='/'>
						<a>fgh</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>fgh</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>fgh</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>fgh</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>fgh</a>
					</Link>
				</li>
			</ul>
		</Navigation>
	);

export default Nav;
