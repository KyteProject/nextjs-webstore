import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Item from '../components/Item';

const ALL_ITEMS = gql`
		{
			items {
				id
				title
				price
				description
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

					return data.items.map( ( item ) => (
						<Item
							key={item.id}
							title={item.title}
							description={item.description}
							price={item.price}
							image={item.image}
						/>
					) );
				}}
			</Query>
		);
	};

export default ProductList;
