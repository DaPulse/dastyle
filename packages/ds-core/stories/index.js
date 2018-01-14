import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Welcome from './Welcome';

import Button from '../src/components/button/button';
import ButtonExample from './button-example';

import Form from '../src/components/forms/form';
import FormGroup from '../src/components/forms/form-group';
import InputCaption from '../src/components/forms/input-caption';
import InputGroup from '../src/components/forms/input-group';
import InputGroupAddon from '../src/components/forms/input-group-addon';
import Input from '../src/components/forms/input';
import Label from '../src/components/forms/label';


storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));
storiesOf('Button style guide', module)
  .add('Button sizes', () => (
    <div>
      <Button color="primary" size='lg'>Button</Button>
      <Button color="primary">Button</Button>
      <Button color="primary" size='sm'>Button</Button>
    </div>
  ))
  .add('Button states', () => (
    <div>
      <Button color="primary" size='sm'>Button</Button>
      <Button color="primary" size='sm'>Hover</Button>
      <Button color="primary" size='sm' active>Hover and Pressed</Button>
      <Button color="primary" size='sm' disabled>Button</Button>
    </div>
  ))
  .add('Switch button', () => (
    <div>
      <Button color="primary" size='sm'>Join</Button>
      <Button color="primary" size='sm'>Hover</Button>
      <Button color="primary" size='sm' outline>Join</Button>
      <Button className="myTest" color="primary" size='sm' outline>Hover</Button>
    </div>
  ))
  .add('Indication', () => (
      <div>
        <Button color="primary" size='sm' >Copy</Button>
        <Button color="primary" size='sm' active>Copied</Button>
        <Button color="primary" size='sm' active>V</Button>
      </div>
  ))
  .add('Colors', () => (
    <div>
      <Button color="success" size='sm' >Button</Button>
      <Button color="private" size='sm' >Button</Button>
      <Button color="shareable" size='sm' >Button</Button>
      <Button color="primary" size='sm' outline>Turn on</Button>
      <Button color="primary" size='sm' >Star</Button>
    </div>
  ))
  .add('Variations', () => (
    <div>
      <Button color="secondary" size='sm' >Button</Button>     
    </div>
  ))
  .add('Loading', () => (
    <div>
      <Button color='primary' loading size='sm'>outline</Button>
    </div>
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
      <Button color="secondary" size='lg'>Secondary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="secondary" size='sm'>Secondary</Button>
    </div>
  ))
  .add('[should not use] disabled secondary with text: [3 sizes]', () => (
    <div>
      <Button color="secondary" disabled size='lg'>Secondary</Button>
      <Button color="secondary" disabled>Secondary</Button>
      <Button color="secondary" disabled size='sm'>Secondary</Button>
    </div>
  ))
  .add('disabled with text: [3 sizes]', () => (
    <div>
      <Button color="primary" disabled size='lg'>Disabled</Button>
      <Button color="primary" disabled>Disabled</Button>
      <Button color="primary" disabled size='sm'>Disabled</Button>
    </div>
  ))
  .add('success with text: [3 sizes]', () => (
    <div>
      <Button color="success" size='lg'>Success</Button>
      <Button color="success">Success</Button>
      <Button color="success" size='sm'>Success</Button>
    </div>
  ))

  .add('success disabled with text: [3 sizes]', () => (
    <div>
      <Button color="success" disabled size='lg'>Disabled</Button>
      <Button color="success" disabled>Disabled</Button>
      <Button color="success" disabled size='sm'>Disabled</Button>
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

  .add('outline: [3 sizes + non primary brand colors] disabled', () => (
    <div>
      <Button color='primary' disabled outline>Outline</Button>
      <Button color='primary' disabled outline>Outline</Button>
      <Button color='primary' disabled outline>Outline</Button>
    </div>
  ))

  .add('Not meant to be used disabled: [3 sizes + non primary brand colors]', () => (
    <div>
      <Button color="private" disabled>Disabled - P</Button>
      <Button color="shareable" disabled>Disabled - S</Button>
      <Button color="alert" disabled>Disabled - A</Button>
      <Button color="success" disabled>Disabled - S</Button>
    </div>
  ))

  .add('animated: [3 sizes + non primary brand colors]', () => (
    <div>
      <div>
        <Button color='primary' loading size='lg'>outline</Button>
        <Button color='primary' size='lg'>Load</Button>
        <Button color='shareable' loading size='lg'>outline</Button>
        <Button color='shareable' size='lg'>Load</Button>
        <Button color='private' loading size='lg'>outline</Button>
        <Button color='private' size='lg'>Load</Button>
        <Button color='alert' loading size='lg'>outline</Button>
        <Button color='alert' size='lg'>Load</Button>
        <Button color='success' loading size='lg'>outline</Button>
        <Button color='success' size='lg'>Load</Button>
      </div><br />
      <div>
        <Button color='primary' loading>outline</Button>
        <Button color='primary'>Load</Button>
        <Button color='shareable' loading>outline</Button>
        <Button color='shareable'>Load</Button>
        <Button color='private' loading>outline</Button>
        <Button color='private'>Load</Button>
        <Button color='alert' loading>outline</Button>
        <Button color='alert'>Load</Button>
        <Button color='success' loading>outline</Button>
        <Button color='success'>Load</Button>
      </div><br />
      <div>
        <Button color='primary' loading size='sm'>outline</Button>
        <Button color='primary' size='sm'>Load</Button>
        <Button color='shareable' loading size='sm'>outline</Button>
        <Button color='shareable' size='sm'>Load</Button>
        <Button color='private' loading size='sm'>outline</Button>
        <Button color='private' size='sm'>Load</Button>
        <Button color='alert' loading size='sm'>outline</Button>
        <Button color='alert' size='sm'>Load</Button>
        <Button color='success' loading size='sm'>outline</Button>
        <Button color='success' size='sm'>Load</Button>
      </div>
    </div>
  ))
  .add('outlined animated: [3 sizes + non primary brand colors]', () => (
    <div>
      <div>
        <Button outline color='primary' loading size='lg'>outline</Button>
        <Button outline color='primary' size='lg' icon="fa fa-star-o">Load</Button>
        <Button outline color='shareable' loading size='lg'>outline</Button>
        <Button outline color='shareable' size='lg' icon="fa fa-star-o">Load</Button>
        <Button outline color='private' loading size='lg'>outline</Button>
        <Button outline color='private' size='lg' icon="fa fa-star-o">Load</Button>
        <Button outline color='alert' loading size='lg'>outline</Button>
        <Button outline color='alert' size='lg' icon="fa fa-star-o">Load</Button>
        <Button outline color='success' loading size='lg'>outline</Button>
        <Button outline color='success' size='lg' icon="fa fa-star-o">Load</Button>
      </div><br />
      <div>
        <Button outline color='primary' loading>outline</Button>
        <Button outline color='primary' icon="fa fa-star-o">Load</Button>
        <Button outline color='shareable' loading>outline</Button>
        <Button outline color='shareable' icon="fa fa-star-o">Load</Button>
        <Button outline color='private' loading>outline</Button>
        <Button outline color='private' icon="fa fa-star-o">Load</Button>
        <Button outline color='alert' loading>outline</Button>
        <Button outline color='alert' icon="fa fa-star-o">Load</Button>
        <Button outline color='success' loading>outline</Button>
        <Button outline color='success' icon="fa fa-star-o">Load</Button>
      </div><br />
      <div>
        <Button outline color='primary' loading size='sm'>outline</Button>
        <Button outline color='primary' size='sm' icon="fa fa-star-o">Load</Button>
        <Button outline color='shareable' loading size='sm'>outline</Button>
        <Button outline color='shareable' size='sm' icon="fa fa-star-o">Load</Button>
        <Button outline color='private' loading size='sm'>outline</Button>
        <Button outline color='private' size='sm' icon="fa fa-star-o">Load</Button>
        <Button outline color='alert' loading size='sm'>outline</Button>
        <Button outline color='alert' size='sm' icon="fa fa-star-o">Load</Button>
        <Button outline color='success' loading size='sm'>outline</Button>
        <Button outline color='success' size='sm' icon="fa fa-star-o">Load</Button>
      </div>
    </div>
  ))
  .add('interactive loader button', () => (
    <div style={{marginTop: '25%', width: '100%', textAlign: 'center'}}>
      <ButtonExample />
    </div>
  ))
  .add('interactive loader button keepsize', () => (
    <div style={{marginTop: '25%', width: '100%', textAlign: 'center'}}>
      <ButtonExample keepsize/>
    </div>
  ));
  storiesOf('Forms', module)
    .add('Default Input', () => (
      <div style={{ marginLeft: 100, width: '70%'}}>
        <h3>Default Input Field (text)</h3>
        <Input type='text' placeholder='Try typing something...' />
      </div>
    ))
    .add('Fixed Input', () => (
      <div style={{ marginLeft: 100, width: '70%'}}>
        <h3>Default Input Field (text)</h3>
        <InputGroup>
          <InputGroupAddon>Prefix</InputGroupAddon>
          <Input placeholder="input" />
        </InputGroup>
        <InputGroup>
          <Input placeholder="input" />
          <InputGroupAddon>Sufix</InputGroupAddon>
        </InputGroup>
      </div>
    ))
    .add('Input Caption', () => (
      <div style={{ marginLeft: 100, width: '70%'}}>
        <h3>Input Caption</h3>
        <Form>
          <FormGroup>
            <Input placeholder="Email Address"/>
            <InputCaption right color="alert">Required</InputCaption>
          </FormGroup>
          <FormGroup>
            <Input type='password' placeholder="Password"/>
            <InputCaption color="basic-blue">Forgot your password?</InputCaption>
          </FormGroup>
        </Form>
      </div>
    ))
    .add('Set Password', () => (
      <Form style={{ marginLeft: 100, width: '70%'}}>
        <h1>In Constructions C:</h1>
        <FormGroup>
          <InputGroup>
            <Input type='password' placeholder="Password"/>
            <InputGroupAddon>Show</InputGroupAddon>
          </InputGroup>
          <InputCaption color="basic-blue">Forgot your password?</InputCaption>
        </FormGroup>
      </Form>
    ))
    .add('Input with Feedback', () => (
      <div style={{ marginLeft: 100, width: '70%'}}>
        <Form>
          <h3>Input with Feedback</h3>
          <FormGroup color="success">
            <Input state="success" placeholder="Input"/>
            <InputCaption right color="success">Feedback Caption</InputCaption>
          </FormGroup>
          <FormGroup color="alert">
            <Input state="alert" placeholder="Input"/>
            <InputCaption right color="alert">Feedback Caption</InputCaption>
          </FormGroup>
        </Form>
      </div>
    ))
    .add('Checkbox', () => (
      <Form style={{ marginLeft: 100, width: '70%'}}>
        <h3>Checkbox</h3>
        <FormGroup>
          <Input type='checkbox'/>
        </FormGroup>
        <FormGroup>
          <Input type='checkbox' disabled/>
        </FormGroup>
      </Form>
    ))
    .add('Radio Button', () => (
      <Form style={{ marginLeft: 100, width: '70%'}}>
        <h3>Radio Button</h3>
        <FormGroup>
          <Input type='radio'/>
        </FormGroup>
        <FormGroup>
          <Input type='radio' disabled/>
        </FormGroup>
      </Form>
    ))
    .add('Inline Edit', () => (
      <Form style={{ marginLeft: 100, width: '70%'}}>
        <h1>In Constructions C:</h1>
      </Form>
    ))
    .add('Text Area - Default', () => (
      <Form style={{ marginLeft: 100, width: '70%'}}>
        <h1>In Constructions C:</h1>
      </Form>
    ))
    .add('Text Area - Write an Update', () => (
      <Form style={{ marginLeft: 100, width: '70%'}}>
        <h1>In Constructions C:</h1>
      </Form>
    ))
    .add('File Drop', () => (
      <Form style={{ marginLeft: 100, width: '70%'}}>
        <h1>In Constructions C:</h1>
      </Form>
    ))
