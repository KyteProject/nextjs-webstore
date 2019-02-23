import App, { Container } from 'next/app';
import NProgress from 'next-nprogress/component';
import Page from '../containers/Page';

class MyApp extends App {
	static async getInitialProps( { Component, ctx } ) {
		let pageProps = {};

		if ( Component.getInitialProps ) {
			pageProps = await Component.getInitialProps( ctx );
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<NProgress color='#F43779' options={{ trickleSpeed: 50 }} showAfterMs={0} spinner />
				<Page>
					<Component {...pageProps} />
				</Page>
			</Container>
		);
	}
}

export default MyApp;
