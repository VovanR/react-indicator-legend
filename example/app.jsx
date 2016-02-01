/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import IndicatorLegend from '../index.jsx';

require('../style.css');

ReactDOM.render(<IndicatorLegend onClickItem={val => {console.log(val);}} />, document.getElementById('app'));
