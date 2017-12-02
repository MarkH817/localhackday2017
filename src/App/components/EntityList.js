import React, {Component} from 'react'
import {Entity} from './Entity'

export class EntityList extends Component {
  render () {
    let list = this.props.entities.map(entity => (
      <Entity key={entity.id} id={entity.id} tag={entity.tag} />
    ))

    return (
      <div className='entity-list'>
        {list}
      </div>
    )
  }
}
