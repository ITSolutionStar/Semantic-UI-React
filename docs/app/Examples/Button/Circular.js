import React, {Component} from 'react';
import {Button} from 'stardust';

export default class extends Component {
  render() {
    return (
      <Button className='circular icon'>
        <i className='heart icon'></i>
      </Button>
    );
  }
}
