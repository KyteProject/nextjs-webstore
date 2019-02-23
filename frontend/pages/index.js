import React from 'react';
import styled from 'styled-components';

const CaptionBackground = styled.div`
		position: absolute;
		right: 0;
		left: 0;
		margin: 0 auto;
		padding: 50px 0;
		text-align: center;
		z-index: 1;
		h1 {
			font-size: 14rem;
			font-weight: 900 !important;
			font-family: 'Alegreya Sans SC', sans-serif;
			opacity: 0.04;
		}
	`,
	Caption = styled.div`
		position: absolute;
		right: 0;
		left: 0;
		margin: 0 auto;
		padding: 120px 0;
		text-align: center;
		z-index: 1;
		h1 {
			font-size: 8rem;
			font-weight: 300 !important;
			font-family: 'Alegreya Sans SC', sans-serif;
		}
		h2 {
			font-size: 1.6rem;
			margin-top: -44px;
			font-family: 'Alegreya Sans SC', sans-serif;
			font-weight: 300 !important;
		}
	`,
	Home = () => (
		<React.Fragment>
			<CaptionBackground>
				<h1>Ukemi</h1>
			</CaptionBackground>
			<Caption>
				<h1>Ukemi</h1>
				<h2>MODERN SHOP TEMPLATE</h2>
			</Caption>
		</React.Fragment>
	);

export default Home;
