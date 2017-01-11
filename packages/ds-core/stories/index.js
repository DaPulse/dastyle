import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from '../src/components/button/button';
import ButtonExample from './button-example';
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
  .add('secondary with text: [3 sizes]', () => (
    <div>
      <Button color="secondary" size='lg'>Active</Button>
      <Button color="secondary">Active</Button>
      <Button color="secondary" size='sm'>Active</Button>
    </div>
  ))
  .add('[should not use] disabled secondary with text: [3 sizes]', () => (
    <div>
      <Button color="secondary" disabled size='lg'>Active</Button>
      <Button color="secondary" disabled>Active</Button>
      <Button color="secondary" disabled size='sm'>Active</Button>
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
      <Button color='primary' outline size='lg'>Outline</Button>
      <Button color='primary' outline>Outline</Button>
      <Button color='primary' outline size='sm'>Outline</Button>
    </div>
  ))

  .add('Not meant to be used disabled: [3 sizes + non primary brand colors]', () => (
    <div>
      <Button color="private" disabled size='lg'>Disabled - P</Button>
      <Button color="shareable" disabled>Disabled - S</Button>
      <Button color="alert" disabled size='sm'>Disabled - A</Button>
    </div>
  ))

  .add('animated: [3 sizes + non primary brand colors]', () => (
    <div>
      <div>
        <Button color='primary' loading size='lg'>outline</Button>
        <Button color='primary' size='lg'>load</Button>
        <Button color='shareable' loading size='lg'>outline</Button>
        <Button color='shareable' size='lg'>load</Button>
        <Button color='private' loading size='lg'>outline</Button>
        <Button color='private' size='lg'>load</Button>
        <Button color='alert' loading size='lg'>outline</Button>
        <Button color='alert' size='lg'>load</Button>
      </div><br />
      <div>
        <Button color='primary' loading>outline</Button>
        <Button color='primary'>load</Button>
        <Button color='shareable' loading>outline</Button>
        <Button color='shareable'>load</Button>
        <Button color='private' loading>outline</Button>
        <Button color='private'>load</Button>
        <Button color='alert' loading>outline</Button>
        <Button color='alert'>load</Button>
      </div><br />
      <div>
        <Button color='primary' loading size='sm'>outline</Button>
        <Button color='primary' size='sm'>load</Button>
        <Button color='shareable' loading size='sm'>outline</Button>
        <Button color='shareable' size='sm'>load</Button>
        <Button color='private' loading size='sm'>outline</Button>
        <Button color='private' size='sm'>load</Button>
        <Button color='alert' loading size='sm'>outline</Button>
        <Button color='alert' size='sm'>load</Button>
      </div>
    </div>
  ))
  .add('outlined animated: [3 sizes + non primary brand colors]', () => (
    <div>
      <div>
        <Button outline color='primary' loading size='lg'>outline</Button>
        <Button outline color='primary' size='lg'>load</Button>
        <Button outline color='shareable' loading size='lg'>outline</Button>
        <Button outline color='shareable' size='lg'>load</Button>
        <Button outline color='private' loading size='lg'>outline</Button>
        <Button outline color='private' size='lg'>load</Button>
        <Button outline color='alert' loading size='lg'>outline</Button>
        <Button outline color='alert' size='lg'>load</Button>
      </div><br />
      <div>
        <Button outline color='primary' loading>outline</Button>
        <Button outline color='primary'>load</Button>
        <Button outline color='shareable' loading>outline</Button>
        <Button outline color='shareable'>load</Button>
        <Button outline color='private' loading>outline</Button>
        <Button outline color='private'>load</Button>
        <Button outline color='alert' loading>outline</Button>
        <Button outline color='alert'>load</Button>
      </div><br />
      <div>
        <Button outline color='primary' loading size='sm'>outline</Button>
        <Button outline color='primary' size='sm'>load</Button>
        <Button outline color='shareable' loading size='sm'>outline</Button>
        <Button outline color='shareable' size='sm'>load</Button>
        <Button outline color='private' loading size='sm'>outline</Button>
        <Button outline color='private' size='sm'>load</Button>
        <Button outline color='alert' loading size='sm'>outline</Button>
        <Button outline color='alert' size='sm'>load</Button>
      </div>
    </div>
  ))
  .add('interactive loader button', () => (
    <ButtonExample />
  ));
