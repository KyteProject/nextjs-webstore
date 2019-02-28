import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import Page from '../containers/Page';
import withApollo from './../lib/withData';
import NProgress from 'next-nprogress/component';
class MyApp extends App {
	static async getInitialProps( { Component, ctx } ) {
		let pageProps = {};

		if ( Component.getInitialProps ) {
			pageProps = await Component.getInitialProps( ctx );
		}

		// PageProps.query = ctx.query;
		return { pageProps };
	}

	render() {
		const { Component, pageProps, apollo } = this.props;

		return (
			<Container>
				<ApolloProvider client={apollo}>
					<NProgress color='#F43779' options={{ trickleSpeed: 50 }} showAfterMs={0} />
					<Page>
						<Component {...pageProps} />
					</Page>
				</ApolloProvider>
			</Container>
		);
	}
}

export default withApollo( MyApp );
