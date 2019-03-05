export default ( input ) => {
	return new Intl.NumberFormat( 'en-GB', { style: 'currency', currency: 'GBP' } ).format( input / 100 );
};
