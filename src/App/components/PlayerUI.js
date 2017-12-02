import React, {Component} from 'react'
import {EntityList} from './EntityList'

const entities = [
  {
    tag: 'Player',
    id: 1
  },
  {
    tag: 'E1',
    id: 2
  },
  {
    tag: 'E2',
    id: 3
  }
]

export class PlayerUI extends Component {
  render () {
    return (
      <div className='player-ui'>
        <EntityList entities={entities} />

        <div className='text-ui' />

        <div className='actions'>
          <button>Something</button>
        </div>
      </div>
    )
  }
}
