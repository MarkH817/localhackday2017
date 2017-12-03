import React, {Component} from 'react'

const deathPrompts = [
  'Someone tried to flee, but they ran into a big hole.',
  'Bees. Allergies. Allerbees. Hahahaha! Oh wait. They died.',
  'They charged straight into the comfort of the nearest bear\'s arms. The bear swiftly mauled them due to embarrassment and social anxiety.',
  'Sometimes fleeing is worse than death. Oh wait. They tripped. Oh no, they\'re rolling down a hill. Wow! How high were we? Still rolling, huh? Hmm.... Oh they finished! They died.',
  'Local fighter runs into the next dimension. The dimension of double death.'
]

function randomDeath () {
  let index = Math.floor(Math.random() * deathPrompts.length)
  return deathPrompts[index]
}

export class Actions extends Component {
  render () {
    let actionList

    if (!this.props.isFighting) {
      actionList = [
        {
          title: 'Attack',
          onClick: () => {
            this.props.onAddText('An attack was made. However, the fighting system was not implemented.')
          }
        },
        {
          title: 'Run Away',
          onClick: () => {
            this.props.onAddText(randomDeath())
          }
        }
      ]
    } else {
      actionList = [
        {
          title: 'Add Enemy',
          onClick: () => {
            // this.props.onAddEntity('b', 1)
          }
        }
      ]
    }

    let actions = actionList.map((act, index) => (
      <button key={index} onClick={act.onClick}>
        {act.title}
      </button>
    ))

    return (
      <section className='actions'>
        {actions}
      </section>
    )
  }
}
