import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { themeGet } from 'styled-system';
import Meta from './../containers/Meta';
import { Theme } from '../theme';
import Sidebar from './Sidebar';
import { GlobalStyle } from './global.style';

const ContentWrapper = styled.div`
	max-width: ${themeGet( 'maxWidths.7', '1000' )}px;
	margin: 0 auto;
	padding: 2rem;
	min-height: 100vh;
	/* background-image: url('../static/placeholder-1920x1080.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center; */
`;

class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={Theme}>
				<React.Fragment>
					<Meta />
					<GlobalStyle />
					<Sidebar />
					<ContentWrapper>{this.props.children}</ContentWrapper>
				</React.Fragment>
			</ThemeProvider>
		);
	}
}

export default Page;
