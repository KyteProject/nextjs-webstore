import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { themeGet } from 'styled-system';
import Meta from './../containers/Meta';
import { Theme } from '../theme';
import Sidebar from './Sidebar';
import { GlobalStyle } from './global.style';

const ContentWrapper = styled.div`
		height: 100%;
		min-height: 100vh;
		width: calc(100% - 80px);
		margin-left: 80px;
		position: relative;
		background: ${themeGet( 'colors.offWhite' )};
		transition: all 0.3s;

		background-image: url('../static/images/bg-1.jpg');
		background-size: cover;
		background-repeat: no-repeat;
	`,
	Page = ( props ) => {
		return (
			<ThemeProvider theme={Theme}>
				<React.Fragment>
					<Meta />
					<GlobalStyle />
					<Sidebar />
					<ContentWrapper>{props.children}</ContentWrapper>
				</React.Fragment>
			</ThemeProvider>
		);
	};

export default Page;
