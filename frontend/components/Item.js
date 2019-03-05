import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Card from './Card';
import currency from '../lib/currency';

const Thumbnail = styled.img`
		margin: 0;
		max-width: 100px;
		display: block;
		height: auto;
		width: 100%;
	`,
	Item = ( { item } ) => {
		return (
			<Card
				display='flex'
				justifyContent='flex-start'
				alignItems='center'
				height='auto'
				padding='20px 40px'
				marginTop='20px'
				width='100%'
				minHeight={0}
				maxHeight='none'
				maxWidth='auto'
			>
				{/* Product image */}
				<Thumbnail src={item.image} alt={item.title} />
				{/* Produt info */}
				<span className='product-info'>
					<Link as={`/p/${item.category.name}/${item.title}`} href={`/product?id=${item.id}`}>
						<a>
							<span className='product-name'>{item.title}</span>
						</a>
					</Link>
					<span>{item.category.name}</span>
					<span className='product-description'>{item.description}</span>
					<span className='product-price'>{currency( item.price )}</span>
				</span>
				{/* Card actions */}
			</Card>
		);
	};

Item.propTypes = {
	item: PropTypes.object.isRequired
};

export default Item;
