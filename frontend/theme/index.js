import colors from './colors';

export const Theme = {
	breakpoints: [ 769, 1088, 1280, 1472 ],
	space: [ 0, 5, 8, 10, 15, 20, 25, 30, 33, 35, 40, 50, 60, 70, 80, 85, 90, 100 ],
	fontSizes: [ 10, 12, 14, 15, 16, 18, 20, 22, 24, 36, 48, 80, 96 ],
	fontWeights: [ 100, 200, 300, 400, 500, 600, 700, 800, 900 ],
	lineHeights: {
		solid: 1,
		title: 1.2,
		copy: 1.5
	},
	letterSpacings: {
		normal: 'normal',
		tracked: '0.1em',
		tight: '-0.05em',
		mega: '0.25em'
	},
	borders: [ 0, '1px solid #ededed', '2px solid', '3px solid', '4px solid', '5px solid', '6px solid' ],
	radius: [ 3, 4, 5, 10, 20, 30, 60, 120, '50%' ],
	heights: [ 36, 40, 44, 46, 48, 54, 70, 81, 128 ],
	maxWidths: [ 16, 32, 64, 128, 200, 512, 768, 960, 1024, 1152, 1344, 1536 ],
	colors
};
