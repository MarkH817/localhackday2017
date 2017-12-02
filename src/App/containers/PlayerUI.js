import React, {Component} from 'react'
import {EntityList, TextUI, Actions} from '../components'

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

const texts = [
  'You have dealt 3 damage.',
  'E1 has hit you for 1 damage.',
  'E2 tried to flee. They accidentally fell down a hole instead.'
]

export class PlayerUI extends Component {
  render () {
    return (
      <div className='player-ui'>
        <EntityList entities={entities} />
        <TextUI texts={texts} />
        <Actions />
      </div>
    )
  }
}
