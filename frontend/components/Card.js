import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
	boxShadow,
	borderRadius,
	backgroundImage,
	backgroundSize,
	backgroundPosition,
	backgroundRepeat,
	opacity,
	overflow,
	style,
	justifyContent
} from 'styled-system';
import { base } from './base';

const transition = style( {
		prop: 'transition',
		cssProperty: 'transition',
		key: 'transitions'
	} ),
	Card = styled.div`
		${base} ${boxShadow} ${borderRadius} ${backgroundImage} ${backgroundPosition} ${backgroundRepeat} ${backgroundSize} ${opacity} ${overflow} ${transition} ${justifyContent};
	`;

Card.propTypes = {
	...boxShadow.propTypes,
	...borderRadius.propTypes,
	...backgroundImage.propTypes,
	...backgroundSize.propTypes,
	...backgroundPosition.propTypes,
	...backgroundRepeat.propTypes,
	...opacity.propTypes,
	...justifyContent.propTypes
};

Card.defaultProps = {
	position: 'relative',
	bg: 'white',
	border: '1px solid #ededed',
	borderRadius: '0.25rem',
	display: 'inline-block',
	overflow: 'hidden',
	width: '100%',
	transition: 'all 0.5s',
	maxHeight: '270px',
	minHeight: '270px',
	boxShadow: '0px 20px 35px rgba(0, 0, 0, 0.05)'
};
export default Card;
