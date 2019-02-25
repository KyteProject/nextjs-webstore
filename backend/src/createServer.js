import { GraphQLServer } from 'graphql-yoga';
import Mutations from './resolvers/Mutations';
import Query from './resolvers/Query';
import db from './db';

const createServer = () => {
	return new GraphQLServer( {
		typeDefs: './src/schema.graphql',
		resolvers: {
			Mutations,
			Query
		},
		resolverValidationOptions: {
			requireResolversForResolveType: false
		},
		context: ( req ) => ( { ...req, db } )
	} );
};

export default createServer;
