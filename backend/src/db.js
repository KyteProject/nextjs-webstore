require( 'dotenv' ).config();
import { Prisma } from 'prisma-binding';

const db = new Prisma( {
	typeDefs: './src/generated/prisma.graphql',
	endpoint: process.env.PRISMA_ENDPOINT,
	secret: process.env.PRISMA_MANAGEMENT_API_SECRET,
	debug: false
} );

export default db;
