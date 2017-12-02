import React, {Component} from 'react'

export class Entity extends Component {
  render () {
    return (
      <button className='entity'>
        <h3>{this.props.tag}</h3>
      </button>
    )
  }
}
