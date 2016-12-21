import React from 'react';
import Button from '../src/components/button/button';
import renderer from 'react-test-renderer';

test('Button changes the class when hovered', () => {

  const component = renderer.create(
    <Button>Test Button</Button>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseEnter();

  tree = component.toJSON();

  expect(tree).toMatchSnapshot();


  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseDown();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
