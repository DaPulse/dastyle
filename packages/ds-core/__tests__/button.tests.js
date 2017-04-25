import React from 'react';
import Button from '../src/components/button/button';
import renderer from 'react-test-renderer';

test('Button variations for color and size', () => {
  // TODO: add icon tests
  // TODO: add Link tests (a)
  [undefined, true].forEach(loading => {
    [undefined, true].forEach(disabled => {
      [undefined, true].forEach(outline => {
        [undefined,'primary','alert', 'shareable', 'private', 'secondary', 'success'].forEach(color => {
          [undefined, 'sm', 'lg'].forEach(size => {
            const component = renderer.create(
              <Button color={color} size={size} disabled={disabled} outline={outline} loading={loading}>Test Button</Button>
            );
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();
          });
        });
      })
    })
  })
});
