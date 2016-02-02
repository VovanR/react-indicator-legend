import React from 'react';

const colors = [
	[1000, '#800026'],
	[200, '#E31A1C'],
	[100, '#FC4E2A'],
	[50, '#FD8D3C'],
	[20, '#FEB24C'],
	[10, '#FED976'],
	[0, '#FFEDA0']
];

const IndicatorLegend = React.createClass({
	propTypes: {
		onClickItem: React.PropTypes.func
	},

	_handleClick(val) {
		if (!this.props.onClickItem) {
			return;
		}
		this.props.onClickItem(val);
	},

	render() {
		return (
			<div
				className="indicator-legend"
				{...this.props}
				>
				{colors.map(item => {
					return (
						<div
							key={item[0]}
							className="indicator-legend__item"
							onClick={this._handleClick.bind(this, item[0])}
							style={{
								backgroundColor: item[1]
							}}
							/>
					);
				})}
			</div>
		);
	}
});

export default IndicatorLegend;
