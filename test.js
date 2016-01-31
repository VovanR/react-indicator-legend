import test from 'ava';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import C from './';

test(t => {
	const shallowRenderer = ReactTestUtils.createRenderer();
	shallowRenderer.render(React.createElement(C));
	const result = shallowRenderer.getRenderOutput();

	t.is(result.type, 'div');
	t.is(result.props.children, 'Hello World!');
});
