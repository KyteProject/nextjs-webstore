import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Nav from './Nav';

// Const Heading = styled.h1`
// 		font-size: 4rem;
// 		margin-left: 2rem;
// 		position: relative;
// 		z-index: 2;
// 		transform: skew(-7deg);
// 		a {
// 			padding: 0.5rem 1rem;
// 			background: ${themeGet( 'colours.red', 'red' )};
// 			color: ${themeGet( 'colours.white', 'white' )};
// 			text-transform: uppercase;
// 			text-decoration: none;
// 		}
// 		@media (max-width: 400px) {
// 			margin: 0;
// 			text-align: center;
// 		}
// 	`,
const HeaderWrapper = styled.header`
		display: flex;
		align-items: center;
		background-color: ${themeGet( 'colors.grey', '#4a4860' )};
		border-bottom: 4px solid ${themeGet( 'colors.cherry' )};
		font-size: 0.9em;
	`,
	Logo = styled.a`
		text-decoration: none;
		color: #fff;
		font-size: 1.2em;
		margin: 0px 30px 0px 10px;
		text-transform: uppercase;
		letter-spacing: 3px;
	`,
	Header = () => (
		<HeaderWrapper>
			<Logo>Ukemi</Logo>
			<Nav />
			{/* <Search/> */}
			{/* <Cart /> */}
		</HeaderWrapper>
	);

export default Header;
