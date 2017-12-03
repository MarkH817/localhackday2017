import React, {Component} from 'react'
import {EntityList} from '../components'
import {TextLog} from './TextLog'
import {ActionList} from './ActionList'

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
        <ActionList />
      </div>
    )
  }
}
