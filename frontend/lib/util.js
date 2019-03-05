export const currency = ( input ) => {
	return new Intl.NumberFormat( 'en-GB', { style: 'currency', currency: 'GBP' } ).format( input / 100 );
};

export const groupBy = ( array, property ) => {
	return array.reduce( ( memo, x ) => {
		if ( !memo[ x[ property ] ] ) {
			memo[ x[ property ] ] = [];
		}

		memo[ x[ property ] ].push( x );
		return memo;
	}, {} );
};
