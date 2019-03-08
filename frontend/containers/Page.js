import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { themeGet } from 'styled-system';
import Meta from './../containers/Meta';
import { Theme } from '../theme';
import Sidebar from './Sidebar';
import { GlobalStyle } from './global.style';
import ParticlesComponent from './../components/Particles';
import Box from './../components/Box';

const ContentWrapper = styled.div`
		height: 100%;
		min-height: 100vh;
		width: calc(100% - 80px);
		margin-left: 80px;
		position: relative;
		background: ${themeGet( 'colors.offWhite' )};
		transition: all 0.3s;

		.particle {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
		}

		/* background-image: url('../static/images/bg-1.jpg');
		background-size: cover;
		background-repeat: no-repeat; */
	`,
	Page = ( props ) => {
		return (
			<ThemeProvider theme={Theme}>
				<React.Fragment>
					<Meta />
					<GlobalStyle />
					<Sidebar />
					<ContentWrapper>
						<ParticlesComponent />
						<Box p='3rem 1.5rem'>
							<Box maxWidth={[ 7, 9, 10 ]} m='0 auto'>
								{props.children}
							</Box>
						</Box>
					</ContentWrapper>
				</React.Fragment>
			</ThemeProvider>
		);
	};

export default Page;
