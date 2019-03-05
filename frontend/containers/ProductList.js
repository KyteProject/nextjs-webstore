import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Item from '../components/Item';
import Box from '../components/Box';
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
							filtered.push(
								<React.Fragment>
									<Box m='-0.75rem' display='flex'>
										<Box display='block' p='0.75rem' ml='8.33%' width='83.33%' flex='none'>
											{/* <Title /> */}
											{/* <Controls /> */}
											{/* Product List */}
											{cats[ category ].map( ( item ) => <Item key={item.id} item={item} /> )}
										</Box>
									</Box>
								</React.Fragment>
							);
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
