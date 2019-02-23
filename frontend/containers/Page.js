import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { themeGet } from 'styled-system';
import Meta from './../containers/Meta';
import { Theme } from '../theme';
import Header from './Header';

const PageWrapper = styled.div`
		background: ${themeGet( 'colors.white', '#fff' )};
		color: ${themeGet( 'colors.text', '#000' )};
		background-image: url('../static/placeholder-1920x1080.png');
		height: 100%;
		min-height: 100vh;
		position: relative;
		transition: all 0.3s;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	`,
	ContentWrapper = styled.div`
		max-width: ${themeGet( 'maxWidths.7', '1000' )}px;
		margin: 0 auto;
		padding: 2rem;
	`;

class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={Theme}>
				<PageWrapper>
					<Meta />
					<Header />
					<ContentWrapper>{this.props.children}</ContentWrapper>
				</PageWrapper>
			</ThemeProvider>
		);
	}
}

export default Page;
