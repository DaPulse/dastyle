import React from 'react';

import {
  Input,
  InputGroup,
  InputGroupAddon,
  InputCaption,
  Form,
  FormGroup,
} from "../../../../../../ds-core/build/static/js/main";

export const Default = () =>
  <Input placeholder='Try typing somthing...'/>

export const Prefix = () =>
  <InputGroup>
    <InputGroupAddon>Prefix</InputGroupAddon>
    <Input placeholder="input" />
  </InputGroup>

export const Sufix = () => (
  <InputGroup>
    <Input placeholder="input" />
    <InputGroupAddon>Sufix</InputGroupAddon>
  </InputGroup>
)

export const LeftCaption = () => (
  <Form>
    <FormGroup>
      <Input type='password' placeholder="Password"/>
      <InputCaption color="basic-blue">Forgot your password?</InputCaption>
    </FormGroup>
  </Form>
)

export const RightCaption = () => (
  <Form>
    <FormGroup>
      <Input placeholder="Email Address"/>
      <InputCaption right color="alert">Required</InputCaption>
    </FormGroup>
  </Form>
)

export const SetPassword = () => (
  <Form>
    <FormGroup>
      <InputGroup>
        <Input type='password' placeholder="Password"/>
        <InputGroupAddon>Show</InputGroupAddon>
      </InputGroup>
      <InputCaption color="done-green" right>Password could be more secure</InputCaption>
    </FormGroup>
  </Form>
)

export const InputWithFeedbackSuccess = () => (
  <Form>
    <FormGroup color="success">
      <Input state="success" placeholder="Input"/>
      <InputCaption right color="success">Feedback Caption</InputCaption>
    </FormGroup>
  </Form>
)

export const InputWithFeedbackAlert = () => (
  <Form>
    <FormGroup color="alert">
      <Input state="alert" placeholder="Input"/>
      <InputCaption right color="alert">Feedback Caption</InputCaption>
    </FormGroup>
  </Form>
)

export const Checkbox = () => (
  <Input type="checkbox"/>
)

export const CheckboxDisabled = () => (
  <Input type="checkbox" disabled/>
)

export const RadioButton = () => (
  <Input type="radio"/>
)

export const RadioButtonDisabled = () => (
  <Input type="radio" disabled/>
)
