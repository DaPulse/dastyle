import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from '../src/components/button/button';
import Welcome from './Welcome';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('primary with text, three sizes', () => (
    <div>
      <Button color="primary" size='lg'>Active</Button>
      <Button color="primary">Active</Button>
      <Button color="primary" size='sm'>Active</Button>
    </div>
  ))
  .add('disabled with text', () => (
    <div>
      <Button color="primary" disabled size='lg'>Disabled</Button>
      <Button color="primary" disabled>Disabled</Button>
      <Button color="primary" disabled size='sm'>Disabled</Button>
    </div>
  ));
