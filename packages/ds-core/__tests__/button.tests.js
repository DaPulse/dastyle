import React from 'react';
import Button from '../src/components/button/button';
import renderer from 'react-test-renderer';

test('Button variations for color and size', () => {
  [undefined, true].forEach(disabled => {
    [undefined, true].forEach(outline => {
      [undefined,'primary','alert', 'shareable', 'private'].forEach(color => {
        [undefined, 'sm', 'lg'].forEach(size => {
          const component = renderer.create(
            <Button color={color} size={size} disabled={disabled} outline={outline}>Test Button</Button>
          );
          let tree = component.toJSON();
          expect(tree).toMatchSnapshot();
        });
      });
    })
  })
});
