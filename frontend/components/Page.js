import React, { Component } from 'react';
import Header from './Header';

export default class Page extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				{this.props.children}
			</React.Fragment>
		);
	}
}
