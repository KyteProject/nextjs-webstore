import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ALL_ITEMS = gql`
		{
			items {
				id
				title
				price
				description
			}
		}
	`,
	Items = ( props ) => {
		return (
			<React.Fragment>
				<p>Items</p>
				<Query query={ALL_ITEMS}>
					{( { loading, error, data } ) => {
						if ( loading ) {
							return 'Loading...';
						}

						if ( error ) {
							return `Error! ${error.message}`;
						}

						return data.items.map( ( item ) => <p>{item.title}</p> );
					}}
				</Query>
			</React.Fragment>
		);
	};

export default Items;
