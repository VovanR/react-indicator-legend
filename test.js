import test from 'ava';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import C from './';

function createComponent(component) {
	const shallowRenderer = ReactTestUtils.createRenderer();
	shallowRenderer.render(React.createElement(component));
	return shallowRenderer.getRenderOutput();
}

test(t => {
	const result = createComponent(C);

	t.is(result.type, 'div');
});

test(t => {
	const result = createComponent(C);

	t.true(Array.isArray(result.props.children));
});

test(t => {
	const result = createComponent(C);

	t.true(ReactTestUtils.isElement(result.props.children[0]));
});
