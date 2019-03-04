import React from 'react';
import styled from 'styled-components';

const Caption = styled.div`
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
			<Caption>
				<h1>Unicorn</h1>
				<h2>UNIQUE ITEMS, FOR UNIQUE PEOPLE!</h2>
			</Caption>
		</React.Fragment>
	);

export default Home;
