import React, {Component} from 'react'
import {EntityList, Actions} from '../components'
import {TextLog} from './TextLog'

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
        <TextLog />
        <Actions />
      </div>
    )
  }
}
