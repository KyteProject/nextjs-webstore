import PropTypes from 'prop-types';
import styled from 'styled-components';
import { flexWrap, flexDirection, alignItems, justifyContent, boxShadow, style, lineHeight } from 'styled-system';
import { base } from './base';

const transition = style( {
		prop: 'transition',
		cssProperty: 'transition',
		key: 'transitions'
	} ),
	Box = styled.div`
		${base} ${flexWrap} ${flexDirection} ${alignItems} ${justifyContent} ${boxShadow} ${transition} ${lineHeight};
	`;

Box.propTypes = {
	as: PropTypes.oneOf( [ 'div', 'article', 'section', 'address', 'header', 'footer', 'nav', 'main' ] ),
	...flexWrap.propTypes,
	...flexDirection.propTypes,
	...alignItems.propTypes,
	...justifyContent.propTypes,
	...boxShadow.propTypes,
	...lineHeight.propTypes,
	transition: PropTypes.string
};

Box.defaultProps = {
	as: 'div'
};

Box.displayName = 'Box';

export default Box;
