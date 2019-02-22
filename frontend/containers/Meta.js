import Head from 'next/head';

const Meta = () => (
	<Head>
		<meta
			key='viewport'
			content='width=device-width, initial-scale=1,  maximum-scale=1, user-scalable=0'
			name='viewport'
		/>
		<meta httpEquiv='Content-Type' content='text/html; charset=UTF-8' />
		<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
		<link rel='shortcut icon' href='/static/favicon.png' />
		<link rel='stylesheet' type='text/css' href='' />
		<title>Ukemi Store!</title>
		<meta
			name='description'
			content='Ukemi promote activity in highly urbanised areas and encourage a healthier society through digital design, product creation, and community arts development. Each company member has practised Parkour for over a decade and this is the lens in which we see the world and project our ideas onto.'
		/>
	</Head>
);

export default Meta;
