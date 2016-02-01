/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import IndicatorLegend from '../index.jsx';

require('../style.css');

function onClickItem(val) {
	console.log(val);
}

const indicator = (
	<IndicatorLegend onClickItem={onClickItem} />
);

ReactDOM.render(indicator, document.getElementById('app'));
