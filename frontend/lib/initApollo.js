import ApolloClient, { InMemoryCache } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';

let apolloClient = null;

if ( !process.browser ) {
	global.fetch = fetch;
}

const create = ( initialState ) => {
		return new ApolloClient( {
			connectToDevTools: process.browser,
			ssrMode: !process.browser,
			uri: 'http://127.0.0.1:4444',
			credentials: 'include',
			cache: new InMemoryCache().restore( initialState || {} )
		} );
	},
	//
	initApollo = ( initialState ) => {
		if ( !process.browser ) {
			return create( initialState );
		}

		if ( !apolloClient ) {
			apolloClient = create( initialState );
		}

		return apolloClient;
	};

export default initApollo;
