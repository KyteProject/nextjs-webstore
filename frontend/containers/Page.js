import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled, { ThemeProvider } from 'styled-components';
import { Theme } from '../theme';
import { themeGet } from 'styled-system';

const PageWrapper = styled.div`
		background: ${themeGet( 'colors.white', '#fff' )};
		color: ${themeGet( 'colors.text', '#000' )};
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
