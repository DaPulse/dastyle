import React, { Component } from 'react';
import Button from '../src/components/button/button';

export default class ButtonExample extends Component {
  state = {}
  onClick = () =>
    this.setState({ loading: true }, () =>
      setTimeout(() =>
        this.setState({loading: false}), 1000)
      )

  render() {
    return (
      <Button color='primary' loading={this.state.loading} onClick={this.onClick}>
        Subscribe
      </Button>
    )
  }
}
