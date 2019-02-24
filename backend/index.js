require( 'dotenv' ).config();
import createServer from './src/createServer';
import db from './src/db';

const server = createServer();

server.start(
	{
		cors: {
			credentials: true,
			origin: process.env.FRONTEND_URL
		}
	},
	( details ) => {
		console.log( `Server is now running on port http://localhost: ${details.port}` );
	}
);
