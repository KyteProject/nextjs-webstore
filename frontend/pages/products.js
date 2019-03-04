import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ALL_PRODUCTS = gql`
		{
			items {
				id
				title
				price
				description
			}
		}
	`,
	Products = ( props ) => {
		return (
			<React.Fragment>
				<p>Products</p>
				<Query query={ALL_PRODUCTS}>
					{( { loading, error, data } ) => {
						if ( loading ) {
							return 'Loading...';
						}

						if ( error ) {
							return `Error! ${error.message}`;
						}

						return data.items.map( ( item ) => <p key={item.id}>{item.title}</p> );
					}}
				</Query>
			</React.Fragment>
		);
	};

export default Products;
