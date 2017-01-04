import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from '../src/components/button/button';
import Welcome from './Welcome';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('primary with text: [3 sizes]', () => (
    <div>
      <Button color="primary" size='lg'>Active</Button>
      <Button color="primary">Active</Button>
      <Button color="primary" size='sm'>Active</Button>
    </div>
  ))
  .add('disabled with text: [3 sizes]', () => (
    <div>
      <Button color="primary" disabled size='lg'>Disabled</Button>
      <Button color="primary" disabled>Disabled</Button>
      <Button color="primary" disabled size='sm'>Disabled</Button>
    </div>
  ))
  .add('shareable with text: [3 sizes]', () => (
    <div>
      <Button color="shareable" size='lg'>Shareable</Button>
      <Button color="shareable">Shareable</Button>
      <Button color="shareable" size='sm'>Shareable</Button>
    </div>
  ))
  .add('private with text: [3 sizes]', () => (
    <div>
      <Button color="private" size='lg'>Private</Button>
      <Button color="private">Private</Button>
      <Button color="private" size='sm'>Private</Button>
    </div>
  ))
  .add('disabled with text: [3 sizes]', () => (
    <div>
      <Button color="primary" disabled size='lg'>Disabled</Button>
      <Button color="primary" disabled>Disabled</Button>
      <Button color="primary" disabled size='sm'>Disabled</Button>
    </div>
  ))

  .add('outline: [3 sizes + non primary brand colors]', () => (
    <div>
      <Button color='primary' outline size='lg'>outline</Button>
      <Button color='primary' outline>outline</Button>
      <Button color='primary' outline size='sm'>outline</Button>
    </div>
  ))

  .add('Not meant to be used disabled: [3 sizes + non primary brand colors]', () => (
    <div>
      <Button color="private" disabled size='lg'>Disabled - P</Button>
      <Button color="shareable" disabled>Disabled - S</Button>
      <Button color="alert" disabled size='sm'>Disabled - A</Button>
    </div>
  ))
  ;
