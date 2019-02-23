import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
	space,
	fontFamily,
	textAlign,
	lineHeight,
	fontWeight,
	letterSpacing,
	color,
	position,
	zIndex,
	style
} from 'styled-system';

const transform = style( {
		prop: 'transform',
		cssProperty: 'transform',
		key: 'transforms'
	} ),
	Heading = styled.p`
		${space} ${fontFamily} ${textAlign} ${lineHeight} ${fontWeight} ${letterSpacing} ${color} ${position} ${zIndex} ${transform};
	`;

Heading.propTypes = {
	style: PropTypes.string,
	as: PropTypes.oneOf( [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ] ),
	...space.propTypes,
	...fontFamily.propTypes,
	...fontWeight.propTypes,
	...textAlign.propTypes,
	...lineHeight.propTypes,
	...letterSpacing.propTypes,
	...color.propTypes
};

Heading.defaultProps = {
	as: 'h2',
	mt: 0,
	mb: '1rem',
	fontWeight: 'bold',
	color: 'text'
};

Heading.displayName = 'Heading';

export default Heading;
