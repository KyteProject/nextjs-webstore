/** This is our Base Component every components must be Extend it */
import {
	space,
	borders,
	width,
	minWidth,
	maxWidth,
	height,
	minHeight,
	maxHeight,
	display,
	position,
	fontSize,
	flex,
	order,
	alignSelf,
	color,
	zIndex,
	compose
} from 'styled-system';

export const base = compose(
	() => ( { boxSizing: 'border-box' } ),
	space,
	width,
	minWidth,
	maxWidth,
	height,
	minHeight,
	maxHeight,
	fontSize,
	color,
	flex,
	order,
	alignSelf,
	borders,
	display,
	position,
	zIndex
);

base.propTypes = {
	...display.propTypes,
	...space.propTypes,
	...borders.propTypes,
	...width.propTypes,
	...height.propTypes,
	...fontSize.propTypes,
	...color.propTypes,
	...flex.propTypes,
	...order.propTypes,
	...alignSelf.propTypes,
	...position.propTypes,
	...zIndex.propTypes
};
