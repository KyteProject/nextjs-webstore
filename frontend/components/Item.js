import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Thumbnail = styled.img`
		margin: 0;
		max-width: 100px;
		display: block;
		height: auto;
		width: 100%;
	`,
	Item = ( props ) => {
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
				<Thumbnail src={props.image} alt={props.title} />
				{/* Produt info */}
				<span className='product-info'>
					<a href={props.title}>
						<span className='product-name'>{props.title}</span>
					</a>
					<span className='product-description'>{props.description}</span>
					<span className='product-price'>{props.price}</span>
				</span>
				{/* Card actions */}
			</Card>
		);
	};

export default Item;
