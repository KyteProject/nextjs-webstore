import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Item from '../components/Item';
import { groupBy } from '../lib/util';

const ALL_ITEMS = gql`
		{
			items {
				id
				title
				price
				description
				category
				image
				largeImage
			}
		}
	`,
	ProductList = () => {
		return (
			<Query query={ALL_ITEMS}>
				{( { data, error, loading } ) => {
					if ( loading ) {
						return <p>Loading...</p>;
					}

					if ( error ) {
						return <p>Error: {error.message}</p>;
					}

					const cats = groupBy( data.items, 'category' ),
						filtered = [];

					for ( let category in cats ) {
						if ( category ) {
							filtered.push( <h1>{category}</h1> );
							filtered.push( cats[ category ].map( ( item ) => <Item key={item.id} item={item} /> ) );
						}
					}

					return filtered;
				}}
			</Query>
		);
	};

export default ProductList;

// [
// 	home:
// ]
