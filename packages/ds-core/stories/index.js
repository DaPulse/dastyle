import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from '../src/components/button/button';
import Welcome from './Welcome';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('primary with text', () => (
    <Button onClick={action('clicked')} onMouseEnter={action('hover in')}>Active</Button>
  ))
  .add('primary with some emoji', () => (
    <Button color='primary' onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))
  .add('disabled with text', () => (
    <Button color='primary' disabled onClick={action('clicked')}>Disabled</Button>
  ));
